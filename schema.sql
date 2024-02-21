CREATE TABLE IF NOT EXISTS alc (
    id SERIAL PRIMARY KEY,
    alc VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    clerk_user_id TEXT NOT NULL,
    short BOOLEAN,
    long BOOLEAN,
    easy BOOLEAN,
    complex BOOLEAN,
    egg BOOLEAN,
    dairy BOOLEAN,
    alc_id INTEGER REFERENCES alc(id)
); 

CREATE TABLE IF NOT EXISTS cabinet (
    id SERIAL PRIMARY KEY,
    ingredients VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS fav_spirits (
    id SERIAL PRIMARY KEY,
    fav_spirits VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS cabinet_users (
    user_id INTEGER REFERENCES users(id) NOT NULL,
    cabinet_id INTEGER REFERENCES cabinet(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS fav_spirits_users (
    user_id INTEGER REFERENCES users(id) NOT NULL,
    fav_spirits_id INTEGER REFERENCES fav_spirits(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS favourite (
    user_id INTEGER REFERENCES users(id),
    cocktail_id TEXT NOT NULL
);

INSERT INTO alc (alc) VALUES
('Alcoholic'),
('Non-Alcoholic'),
('Both');

INSERT INTO fav_spirits (fav_spirits) VALUES
('Gin'),
('Rum'),
('Vodka'),
('Whiskey'),
('Brandy'),
('Tequilla');

INSERT INTO cabinet (ingredients) VALUES
('Light rum'),
('Applejack'),
('Gin'),
('Dark rum'),
('Sweet Vermouth'),
('Strawberry schnapps'),
('Scotch'),
('Apricot brandy'),
('Triple sec'),
('Southern Comfort'),
('Orange bitters'),
('Brandy'),
('Lemon vodka'),
('Blended whiskey'),
('Dry Vermouth'),
('Amaretto'),
('Tea'),
('Champagne'),
('Coffee liqueur'),
('Bourbon'),
('Tequila'),
('Vodka'),
('Añejo rum'),
('Bitters'),
('Sugar'),
('Kahlua'),
('demerara Sugar'),
('Dubonnet Rouge'),
('Watermelon'),
('Lime juice'),
('Irish whiskey'),
('Apple brandy'),
('Carbonated water'),
('Cherry brandy'),
('Creme de Cacao'),
('Grenadine'),
('Port'),
('Coffee brandy'),
('Red wine'),
('Rum'),
('Grapefruit juice'),
('Ricard'),
('Sherry'),
('Cognac'),
('Sloe gin'),
('Apple juice'),
('Pineapple juice'),
('Lemon juice'),
('Sugar syrup'),
('Milk'),
('Strawberries'),
('Chocolate syrup'),
('Yoghurt'),
('Mango'),
('Ginger'),
('Lime'),
('Cantaloupe'),
('Berries'),
('Grapes'),
('Kiwi'),
('Tomato juice'),
('Cocoa powder'),
('Chocolate'),
('Heavy cream'),
('Galliano'),
('Peach Vodka'),
('Ouzo'),
('Coffee'),
('Spiced rum'),
('Water'),
('Espresso'),
('Angelica root'),
('Orange'),
('Cranberries'),
('Johnnie Walker'),
('Apple cider'),
('Everclear'),
('Cranberry juice'),
('Egg yolk'),
('Egg'),
('Grape juice'),
('Peach nectar'),
('Lemon'),
('Firewater'),
('Lemonade'),
('Lager'),
('Whiskey'),
('Absolut Citron'),
('Pisco'),
('Irish cream'),
('Ale'),
('Chocolate liqueur'),
('Midori melon liqueur'),
('Sambuca'),
('Cider'),
('Sprite'),
('7-Up'),
('Blackberry brandy'),
('Peppermint schnapps'),
('Creme de Cassis');

-- Delete row form users

ALTER TABLE fav_spirits_users
DROP CONSTRAINT fav_spirits_users_user_id_fkey,
ADD CONSTRAINT fav_spirits_users_user_id_fkey
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;