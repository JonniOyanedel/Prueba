using Microsoft.Extensions.Configuration;
using Bice.BusinessObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Bice.Context
{
    public class ExternalApiContext
    {
        private static IConfiguration _configuration;
        private static IConfigurationSection _configSection;
        Indicador_Entity Indicador = new Indicador_Entity();

        public ExternalApiContext()
        {
            _configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", true, true)
                .Build();

            _configSection = _configuration.GetSection("appSettings");

            var urlApiIndecon = _configSection["externalURL"];
           
            var client = new HttpClient();
            HttpResponseMessage respIndicadores = client.GetAsync(new Uri(urlApiIndecon)).Result;
            var resul = respIndicadores.Content.ReadAsStringAsync().Result;

            var prueba = JsonConvert.DeserializeObject<Indicador_Entity>(resul);
            //Indicador = JsonConvert.DeserializeObject<Indicador_Entity>(resul);

         }

        public Indicador_Entity Indicadores
        {
            get
            {
                return Indicador;
            }

        }


    }
}
