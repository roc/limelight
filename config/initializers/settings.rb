module Settings
  def self.feature_toggles
    @feature_toggles ||= load_feature_toggles
  end

  private

  def self.true?(str)
    regex = /^(true|yes|on|1)$/i
    regex.match(str).present?
  end

  def self.load_feature_toggles
    init_feature_toggles(load_yaml("feature_toggles.yml"))
  end

  def self.init_feature_toggles(yaml)
    yaml.reduce({}) do |feature_toggles, (feature, activation)|
      feature_toggles.tap {|ft| ft[feature.to_sym] = toggle_value(activation)}
    end
  end

  def self.toggle_value(activation)
    case activation
      when "release"
        true
      when "dev"
        (Rails.env.development? or Rails.env.test?)
      else
        false
    end
  end

  def self.load_yaml(file_name)
    YAML.load(File.read(Rails.root.join("config", "environments", file_name)))
  end
end
