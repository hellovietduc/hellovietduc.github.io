# coding: utf-8

Gem::Specification.new do |spec|
    spec.name          = "vietduc"
    spec.version       = "0.1.0"
    spec.authors       = ["vietduc01100001"]
    spec.email         = ["vietduc01100001@gmail.com"]

    spec.summary       = %q{The drafts of my mind}
    spec.homepage      = "https://github.com/vietduc01100001/vietduc01100001.github.io"
    spec.license       = "MIT"

    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

    spec.add_runtime_dependency "jekyll", "~> 3.6"
    spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.10.0"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.5.0"

    spec.add_development_dependency "bundler", "~> 2.0"
    spec.add_development_dependency "rake", "~> 10.0"
  end
