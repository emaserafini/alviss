require 'rails_helper'

RSpec.feature 'Home page', :js do
  scenario 'visitor sees home page' do
    visit root_path

    expect(page).to have_content 'Alviss'
  end
end
