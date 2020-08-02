interface EnvironmentSettings {
    mongo_api_url: string;
    debug: boolean;
}

interface Settings {
    [key: string]: EnvironmentSettings;
}

const development: EnvironmentSettings = {
    mongo_api_url: "http://localhost:4000",
    debug: true,
};

const settings: Settings = { development };

export default settings;
