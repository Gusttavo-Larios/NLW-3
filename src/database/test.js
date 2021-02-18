const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  /* await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp:"98996652",
    images: [
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 18h até 8h",
    open_on_weekends: "0",
  });
*/
  //consultar dados da tabela
  //const selectedOrphanages = await db.all("SELECT id FROM orphanages");
  //console.log(selectedOrphanages);

  //consultando 1 registro
  //const ophanages = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  //console.log(ophanages);

  //deletar dado da tabela
  //console.log(await db.run(`DELETE FROM orphanages WHERE id = 13 `))
  /* console.log(await db.run(`DELETE FROM orphanages WHERE id = 14 `))
  console.log(await db.run(`DELETE FROM orphanages WHERE id = 15 `))
  console.log(await db.run(`DELETE FROM orphanages WHERE id = 16 `))
  console.log(await db.run(`DELETE FROM orphanages WHERE id = 17 `))
  console.log(await db.run(`DELETE FROM orphanages WHERE id = 18 `))*/
  console.log(await db.run(`DELETE FROM orphanages WHERE id = 19 `));
  /* console.log(await db.run(`DELETE FROM orphanages WHERE id = 10 `))
  console.log(await db.run(`DELETE FROM orphanages WHERE id = 11 `))*/

  const selectedOrphanages = await db.all("SELECT id FROM orphanages");
  console.log(selectedOrphanages);
});
