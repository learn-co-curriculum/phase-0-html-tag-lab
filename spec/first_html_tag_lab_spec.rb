require 'spec_helper'

RSpec.describe "Your First HTML Tag" do

  it 'should be able to parse HTML' do
    html = Nokogiri::HTML(File.read("./index.html"))
    
    expect(html).to not_be_nil
  end

end