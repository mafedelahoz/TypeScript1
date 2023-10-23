var Serie = /** @class */ (function () {
    function Serie(index, name, channel, seasons, description, link, image) {
        this.id = index;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    Serie.prototype.getId = function () {
        return this.id;
    };
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.getChannel = function () {
        return this.channel;
    };
    Serie.prototype.getDescription = function () {
        return this.description;
    };
    Serie.prototype.getLink = function () {
        return this.link;
    };
    Serie.prototype.getImage = function () {
        return this.image;
    };
    return Serie;
}());
export { Serie };
