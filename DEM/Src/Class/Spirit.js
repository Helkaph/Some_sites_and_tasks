export class Spirit {
    #name;
    #codename;
    #description;
    #personality;
    #powers;
    #illustration;
    #danger;

    constructor(name, codename, description, personality, powers, illustration, danger) {
        if (name.length > 0 && typeof(name) == 'string') {
            this.#name = name;
        } else {
            throw new Error('Name not indicated')
        }
        if (codename.length > 0 && typeof(name) == 'string') {
            this.#codename = codename;
        } else {
            throw new Error('Codename not indicated')
        }
        if (typeof(description) == 'object') {
            this.#description = description;
        } else {
            throw new Error('Description not indicated');
        }
        if (typeof(personality) == 'object') {
            this.#personality = personality;
        } else {
            throw new Error('Personality not indicated')
        }
        if (typeof(powers) == 'object') {
            this.#powers = powers;
        } else {
            throw new Error('Powers not indicated')
        }
        if (typeof(illustration) == 'object') {
            this.#illustration = illustration;
        } else {
            throw new Error('Illustration not indicated')
        }
        if (typeof(danger) == 'string') {
            this.#danger = danger;
        } else {
            throw new Error('Danger not indicated')
        }
    }

    get name() {
        return this.#name
    }
    get codename() {
        return this.#codename;
    }
    get description() {
        return this.#description;
    }
    get personality() {
        return this.#personality;
    }
    get powers() {
        return this.#powers;
    }
    get illustration() {
        return this.#illustration
    }
    get danger() {
        return this.#danger
    }
}

export default Spirit