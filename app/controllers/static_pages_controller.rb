class StaticPagesController < ApplicationController
  def index
    @hroniks = Hronik.limit(9)
    @hronik = Hronik.all.sample
  end

  def contacts
  end
end
