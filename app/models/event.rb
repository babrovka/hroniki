class Event < ActiveRecord::Base
  attr_accessible :date, :text, :title, :image, :tag_ids, :published, :author, :guest,
                  :crop_x, :crop_y, :crop_w, :crop_h
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  scope :published, -> { where(published: true) }  
  has_many :event_tags
  has_many :tags, through: :event_tags
  has_many :event_views
  
  # validates :author, :title, :date, :text, presence: true
  
    
  
  has_attached_file :image, :styles => { 
    :ico => {:geometry => "100x100#", :processors => [:cropper]}, 
    :side => {:geometry => "220x220#", :processors => [:cropper]},
    :gallery => {:geometry => "300x300#", :processors => [:cropper]},
    :show => {:geometry => "640x460>"}
  }
  
  after_update :reprocess_image, :if => :cropping? 
  
  def cropping?
    !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end
  
  def image_geometry(style = :original)
    @geometry ||= {}
    @geometry[style] ||= Paperclip::Geometry.from_file(image.path(style))
  end
  
  ThinkingSphinx::Index.define :event, :with => :active_record do
    indexes title
    indexes text
  end
  
  
  private
  
  def reprocess_image
    image.assign(image)
    image.save
  end
end
