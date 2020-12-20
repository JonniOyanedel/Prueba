using System;
using System.Collections.Generic;
using System.Text;

namespace Bice.BusinessObjects
{
    public class Cobre
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Dolar
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Euro
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Ipc
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Ivp
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Oro
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Plata
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Uf
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Utm
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Yen
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }

    public class Indicador_Entity
    {
        //public Cobre cobre { get; set; }
        //public Dolar dolar { get; set; }
        //public Euro euro { get; set; }
        //public Ipc ipc { get; set; }
        //public Ivp ivp { get; set; }
        //public Oro oro { get; set; }
        //public Plata plata { get; set; }
        //public Uf uf { get; set; }
        //public Utm utm { get; set; }
        //public Yen yen { get; set; }

        public List<IndicadorContainer> Lista { get; set; }

    }

    public class IndicadorContainer
    {
        public string Nombre { get; set; }
        public Indicador Valores { get; set; }
    }

    public class Indicador
    {
        public string key { get; set; }
        public string name { get; set; }
        public string unit { get; set; }
        public string date { get; set; }
        public double value { get; set; }

    }
}
