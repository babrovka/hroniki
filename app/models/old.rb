class Old < ActiveRecord::Base
  attr_accessible :date, :issue_id, :sn, :text, :title, :image, :tag_ids
  
  has_many :old_tags
  has_many :tags, through: :old_tags
  has_many :old_views
  
  validates :date, :text, :title, presence: true
  
  has_attached_file :image, :styles => { :side => "220x220#", :gallery => "300x300#", :ico => "100x100#", :show => "640x460>" }
end
