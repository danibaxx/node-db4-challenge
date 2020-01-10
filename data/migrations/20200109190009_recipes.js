
exports.up = async function(knex) {
  await knex.schema.createTable("recipe", (tbl) => {
    tbl.increments("id")
    tbl.string("name").notNullable()
    tbl.string("category").notNullable()
    tbl.string("steps").notNullable
  });

  await knex.schema.createTable("ingredients", (tbl) => {
    tbl.increments("id")
    tbl.string("name")
    tbl.increments("quantity_id")
    tbl.float("quantity")
  });

  await knex.schema.createTable("instructions", (tbl) => {
    tbl.increments("id")
    tbl.string("description", 128)
      .notNullable()
  });

  await knex.schema.createTable("recipes_list", (tbl) => {
    tbl.integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipe")
  });
};

exports.down = async function(knex) {
  
};
