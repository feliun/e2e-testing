/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
const baseUrl = 'https://www.coches.com';

Feature('Home Page');

Before(I => {
  I.amOnPage(baseUrl);
});

Scenario('New vehicles browsing', async I => {
  I.say('I need a new car. I am about to discover few brands...');
  const newAudiBtn = 'div.cc_max.cc_makes_grid_home > div > div.cc_new_grid > div > a.cc_make_link.marca.audilogo';
  I.click(newAudiBtn);
  I.waitUrlEquals(`${baseUrl}/coches-nuevos/Audi/`);
  I.see('Ofertas y modelos de Audi nuevos', 'div.cc_max.cc_result_vn_header > div > div.cc_h3 > h1');
  I.say("I am interested in an audi A1! Let's check it out!");
  I.click('div:nth-child(8) > div > div:nth-child(1) > div.cc_price_model');
  I.waitUrlEquals(`${baseUrl}/coches-nuevos/Audi-A1`);
});

Scenario('Second hand browsing', async I => {
  I.say('I need a second hand car. I am about to discover few brands...');
  const secondHandCitroenBtn =
    'div.cc_max.cc_makes_grid_home > div > div.cc_old_grid > div > a.cc_make_link.marca.citroenlogo';
  I.click(secondHandCitroenBtn);
  I.waitUrlEquals(`${baseUrl}/coches-segunda-mano/citroen.htm`);
  I.say("I am interested in an old Citroen! Let's check it out!");
});

Scenario('Car selling', async I => {
  I.say('I would like to sell my car...');
  const carSellingBtn = '#header > div.central-menu > ul > li.sell-car-option > a';
  I.click(carSellingBtn);
  I.waitUrlEquals(`${baseUrl}/vender-coche/`);
  const sellNowBtn =
    'body > div:nth-child(6) > div.row.cc_vertical_spacer_top_5 > div.col-lg-6.col-md-6.text-center.animacion > a.atc';
  I.click(sellNowBtn);
  I.waitUrlEquals(`${baseUrl}/vender-coche/datos-vehiculo/`);
  I.say('I will fill this info now');
  I.selectOption('Marca', 'Bentley');
  I.selectOption('Modelo', 'Arnage');
  I.selectOption('Año de matriculación', '2012');
  I.selectOption('Combustible', 'Gasolina');
  I.selectOption('Versión', 'Arnage R (4p) (456cv)');
  I.checkOption('#SignUpForm_color_6');
  I.fillField('Kilómetros', '60000');
  I.fillField('Precio', '100000');
  I.fillField('Descripción', 'This is a test description to mimic the process of selling a car');
});
