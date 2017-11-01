RSpec.describe "Your First HTML Tag" do

  it 'is an H1 in index.html' do
    html = Nokogiri::HTML(File.read("./index.html"))

    h1 = html.search("h1").first
    hint = <<-MSG 
      expected: not nil
      got: #{h1.inspect}

      Did you code an <h1>Tag</h1> in index.html?
      
    MSG

    expect(h1).to_not be_nil, hint
  end

  it 'the H1 contains "Hello, World!"' do
    html = Nokogiri::HTML(File.read("./index.html"))

    h1_content = html.search("h1").text
    hint = <<-MSG 
      expected: "Hello, World!"
      got: #{h1_content.inspect}

      Does your H1 have exactly "Hello, World!" inside the opening and closing tag?

    MSG

    expect(h1_content).to eq("Hello, World!"), hint
  end

end