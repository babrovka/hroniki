class Old < ActiveRecord::Base
  attr_accessible :date, :issue_id, :sn, :text, :title, :image, :tag_ids, :published
  default_scope order('date DESC')
  before_save :dublicate_date
  
  has_many :old_tags
  has_many :tags, through: :old_tags
  has_many :old_views
  
  belongs_to :issue
  
  scope :published, -> { where(published: true) }  
  
  validates :text, :title, :issue_id, presence: true
  
  has_attached_file :image, :styles => { :side => "220x220#", :gallery => "300x300#", :ico => "100x100#", :show => "640x460>" }
  
  private
    def dublicate_date
      self.date = self.created_at
    end
  
end
