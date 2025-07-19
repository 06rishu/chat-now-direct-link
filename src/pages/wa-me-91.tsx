import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
const WaMe91 = () => {
  const [countryCode, setCountryCode] = useState("91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("Hello");

  // Auto-detect and set default country code to India
  useEffect(() => {
    setCountryCode("91");
  }, []);
  const validateMobileNumber = () => {
    const regex = /^\d{7,20}$/;
    if (!regex.test(mobileNumber)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid mobile number between 7 and 20 digits.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const sendWhatsApp = () => {
    if (!validateMobileNumber()) return;
    const url = `whatsapp://send?phone=${countryCode}${mobileNumber}&text=${encodeURIComponent(message)}`;
    window.open(url);
  };
  const sendBusinessWhatsApp = () => {
    if (!validateMobileNumber()) return;
    const url = `https://api.whatsapp.com/send?phone=${countryCode}${mobileNumber}&text=${encodeURIComponent(message)}`;
    window.open(url);
  };
  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 20);
    setMobileNumber(value);
  };
  const countryOptions = [{
    code: "93",
    name: "Afghanistan (+93)",
    countryCode: "AF"
  }, {
    code: "355",
    name: "Albania (+355)",
    countryCode: "AL"
  }, {
    code: "213",
    name: "Algeria (+213)",
    countryCode: "DZ"
  }, {
    code: "1684",
    name: "American Samoa (+1684)",
    countryCode: "AS"
  }, {
    code: "376",
    name: "Andorra (+376)",
    countryCode: "AD"
  }, {
    code: "244",
    name: "Angola (+244)",
    countryCode: "AO"
  }, {
    code: "1264",
    name: "Anguilla (+1264)",
    countryCode: "AI"
  }, {
    code: "1268",
    name: "Antigua & Barbuda (+1268)",
    countryCode: "AG"
  }, {
    code: "54",
    name: "Argentina (+54)",
    countryCode: "AR"
  }, {
    code: "374",
    name: "Armenia (+374)",
    countryCode: "AM"
  }, {
    code: "297",
    name: "Aruba (+297)",
    countryCode: "AW"
  }, {
    code: "61",
    name: "Australia (+61)",
    countryCode: "AU"
  }, {
    code: "43",
    name: "Austria (+43)",
    countryCode: "AT"
  }, {
    code: "994",
    name: "Azerbaijan (+994)",
    countryCode: "AZ"
  }, {
    code: "1242",
    name: "Bahamas (+1242)",
    countryCode: "BS"
  }, {
    code: "973",
    name: "Bahrain (+973)",
    countryCode: "BH"
  }, {
    code: "880",
    name: "Bangladesh (+880)",
    countryCode: "BD"
  }, {
    code: "1246",
    name: "Barbados (+1246)",
    countryCode: "BB"
  }, {
    code: "375",
    name: "Belarus (+375)",
    countryCode: "BY"
  }, {
    code: "32",
    name: "Belgium (+32)",
    countryCode: "BE"
  }, {
    code: "501",
    name: "Belize (+501)",
    countryCode: "BZ"
  }, {
    code: "229",
    name: "Benin (+229)",
    countryCode: "BJ"
  }, {
    code: "1441",
    name: "Bermuda (+1441)",
    countryCode: "BM"
  }, {
    code: "975",
    name: "Bhutan (+975)",
    countryCode: "BT"
  }, {
    code: "591",
    name: "Bolivia (+591)",
    countryCode: "BO"
  }, {
    code: "5997",
    name: "Bonaire (+59997)",
    countryCode: "BQ"
  }, {
    code: "387",
    name: "Bosnia & Herzegovina (+387)",
    countryCode: "BA"
  }, {
    code: "267",
    name: "Botswana (+267)",
    countryCode: "BW"
  }, {
    code: "55",
    name: "Brazil (+55)",
    countryCode: "BR"
  }, {
    code: "673",
    name: "Brunei (+673)",
    countryCode: "BN"
  }, {
    code: "359",
    name: "Bulgaria (+359)",
    countryCode: "BG"
  }, {
    code: "226",
    name: "Burkina Faso (+226)",
    countryCode: "BF"
  }, {
    code: "257",
    name: "Burundi (+257)",
    countryCode: "BI"
  }, {
    code: "855",
    name: "Cambodia (+855)",
    countryCode: "KH"
  }, {
    code: "237",
    name: "Cameroon (+237)",
    countryCode: "CM"
  }, {
    code: "1",
    name: "Canada (+1)",
    countryCode: "CA"
  }, {
    code: "238",
    name: "Cape Verde (+238)",
    countryCode: "CV"
  }, {
    code: "1345",
    name: "Cayman Islands (+1345)",
    countryCode: "KY"
  }, {
    code: "236",
    name: "Central African Republic (+236)",
    countryCode: "CF"
  }, {
    code: "235",
    name: "Chad (+235)",
    countryCode: "TD"
  }, {
    code: "56",
    name: "Chile (+56)",
    countryCode: "CL"
  }, {
    code: "86",
    name: "China (+86)",
    countryCode: "CN"
  }, {
    code: "57",
    name: "Colombia (+57)",
    countryCode: "CO"
  }, {
    code: "269",
    name: "Comoros (+269)",
    countryCode: "KM"
  }, {
    code: "242",
    name: "Congo (Republic of) (+242)",
    countryCode: "CG"
  }, {
    code: "243",
    name: "Congo (Democratic Republic of) (+243)",
    countryCode: "CD"
  }, {
    code: "682",
    name: "Cook Islands (+682)",
    countryCode: "CK"
  }, {
    code: "506",
    name: "Costa Rica (+506)",
    countryCode: "CR"
  }, {
    code: "225",
    name: "Côte d'Ivoire (+225)",
    countryCode: "CI"
  }, {
    code: "385",
    name: "Croatia (+385)",
    countryCode: "HR"
  }, {
    code: "53",
    name: "Cuba (+53)",
    countryCode: "CU"
  }, {
    code: "5999",
    name: "Curaçao (+5999)",
    countryCode: "CW"
  }, {
    code: "357",
    name: "Cyprus (+357)",
    countryCode: "CY"
  }, {
    code: "42",
    name: "Czech Republic (+42)",
    countryCode: "CZ"
  }, {
    code: "45",
    name: "Denmark (+45)",
    countryCode: "DK"
  }, {
    code: "253",
    name: "Djibouti (+253)",
    countryCode: "DJ"
  }, {
    code: "1809",
    name: "Dominica (+1809)",
    countryCode: "DM"
  }, {
    code: "1809",
    name: "Dominican Republic (+1809)",
    countryCode: "DO"
  }, {
    code: "593",
    name: "Ecuador (+593)",
    countryCode: "EC"
  }, {
    code: "20",
    name: "Egypt (+20)",
    countryCode: "EG"
  }, {
    code: "503",
    name: "El Salvador (+503)",
    countryCode: "SV"
  }, {
    code: "240",
    name: "Equatorial Guinea (+240)",
    countryCode: "GQ"
  }, {
    code: "291",
    name: "Eritrea (+291)",
    countryCode: "ER"
  }, {
    code: "372",
    name: "Estonia (+372)",
    countryCode: "EE"
  }, {
    code: "251",
    name: "Ethiopia (+251)",
    countryCode: "ET"
  }, {
    code: "500",
    name: "Falkland Islands (+500)",
    countryCode: "FK"
  }, {
    code: "298",
    name: "Faroe Islands (+298)",
    countryCode: "FO"
  }, {
    code: "679",
    name: "Fiji (+679)",
    countryCode: "FJ"
  }, {
    code: "358",
    name: "Finland (+358)",
    countryCode: "FI"
  }, {
    code: "33",
    name: "France (+33)",
    countryCode: "FR"
  }, {
    code: "594",
    name: "French Guiana (+594)",
    countryCode: "GF"
  }, {
    code: "689",
    name: "French Polynesia (+689)",
    countryCode: "PF"
  }, {
    code: "241",
    name: "Gabon (+241)",
    countryCode: "GA"
  }, {
    code: "220",
    name: "Gambia (+220)",
    countryCode: "GM"
  }, {
    code: "7880",
    name: "Georgia (+7880)",
    countryCode: "GE"
  }, {
    code: "49",
    name: "Germany (+49)",
    countryCode: "DE"
  }, {
    code: "233",
    name: "Ghana (+233)",
    countryCode: "GH"
  }, {
    code: "350",
    name: "Gibraltar (+350)",
    countryCode: "GI"
  }, {
    code: "30",
    name: "Greece (+30)",
    countryCode: "GR"
  }, {
    code: "299",
    name: "Greenland (+299)",
    countryCode: "GL"
  }, {
    code: "1473",
    name: "Grenada (+1473)",
    countryCode: "GD"
  }, {
    code: "590",
    name: "Guadeloupe (+590)",
    countryCode: "GP"
  }, {
    code: "671",
    name: "Guam (+671)",
    countryCode: "GU"
  }, {
    code: "502",
    name: "Guatemala (+502)",
    countryCode: "GT"
  }, {
    code: "44",
    name: "Guernsey (+44)",
    countryCode: "GG"
  }, {
    code: "224",
    name: "Guinea (+224)",
    countryCode: "GN"
  }, {
    code: "245",
    name: "Guinea Bissau (+245)",
    countryCode: "GW"
  }, {
    code: "592",
    name: "Guyana (+592)",
    countryCode: "GY"
  }, {
    code: "509",
    name: "Haiti (+509)",
    countryCode: "HT"
  }, {
    code: "504",
    name: "Honduras (+504)",
    countryCode: "HN"
  }, {
    code: "852",
    name: "Hong Kong (+852)",
    countryCode: "HK"
  }, {
    code: "36",
    name: "Hungary (+36)",
    countryCode: "HU"
  }, {
    code: "354",
    name: "Iceland (+354)",
    countryCode: "IS"
  }, {
    code: "91",
    name: "India (+91)",
    countryCode: "IN"
  }, {
    code: "62",
    name: "Indonesia (+62)",
    countryCode: "ID"
  }, {
    code: "98",
    name: "Iran (+98)",
    countryCode: "IR"
  }, {
    code: "964",
    name: "Iraq (+964)",
    countryCode: "IQ"
  }, {
    code: "353",
    name: "Ireland (+353)",
    countryCode: "IE"
  }, {
    code: "972",
    name: "Israel (+972)",
    countryCode: "IL"
  }, {
    code: "44",
    name: "Isle of Man (+44)",
    countryCode: "IM"
  }, {
    code: "39",
    name: "Italy (+39)",
    countryCode: "IT"
  }, {
    code: "1876",
    name: "Jamaica (+1876)",
    countryCode: "JM"
  }, {
    code: "81",
    name: "Japan (+81)",
    countryCode: "JP"
  }, {
    code: "44",
    name: "Jersey (+44)",
    countryCode: "JE"
  }, {
    code: "962",
    name: "Jordan (+962)",
    countryCode: "JO"
  }, {
    code: "7",
    name: "Kazakhstan (+7)",
    countryCode: "KZ"
  }, {
    code: "254",
    name: "Kenya (+254)",
    countryCode: "KE"
  }, {
    code: "686",
    name: "Kiribati (+686)",
    countryCode: "KI"
  }, {
    code: "383",
    name: "Kosovo (+383)",
    countryCode: "XK"
  }, {
    code: "965",
    name: "Kuwait (+965)",
    countryCode: "KW"
  }, {
    code: "996",
    name: "Kyrgyzstan (+996)",
    countryCode: "KG"
  }, {
    code: "856",
    name: "Laos (+856)",
    countryCode: "LA"
  }, {
    code: "371",
    name: "Latvia (+371)",
    countryCode: "LV"
  }, {
    code: "961",
    name: "Lebanon (+961)",
    countryCode: "LB"
  }, {
    code: "266",
    name: "Lesotho (+266)",
    countryCode: "LS"
  }, {
    code: "231",
    name: "Liberia (+231)",
    countryCode: "LR"
  }, {
    code: "218",
    name: "Libya (+218)",
    countryCode: "LY"
  }, {
    code: "417",
    name: "Liechtenstein (+417)",
    countryCode: "LI"
  }, {
    code: "370",
    name: "Lithuania (+370)",
    countryCode: "LT"
  }, {
    code: "352",
    name: "Luxembourg (+352)",
    countryCode: "LU"
  }, {
    code: "853",
    name: "Macao (+853)",
    countryCode: "MO"
  }, {
    code: "389",
    name: "Macedonia (+389)",
    countryCode: "MK"
  }, {
    code: "261",
    name: "Madagascar (+261)",
    countryCode: "MG"
  }, {
    code: "265",
    name: "Malawi (+265)",
    countryCode: "MW"
  }, {
    code: "60",
    name: "Malaysia (+60)",
    countryCode: "MY"
  }, {
    code: "960",
    name: "Maldives (+960)",
    countryCode: "MV"
  }, {
    code: "223",
    name: "Mali (+223)",
    countryCode: "ML"
  }, {
    code: "356",
    name: "Malta (+356)",
    countryCode: "MT"
  }, {
    code: "692",
    name: "Marshall Islands (+692)",
    countryCode: "MH"
  }, {
    code: "596",
    name: "Martinique (+596)",
    countryCode: "MQ"
  }, {
    code: "222",
    name: "Mauritania (+222)",
    countryCode: "MR"
  }, {
    code: "230",
    name: "Mauritius (+230)",
    countryCode: "MU"
  }, {
    code: "269",
    name: "Mayotte (+269)",
    countryCode: "YT"
  }, {
    code: "52",
    name: "Mexico (+52)",
    countryCode: "MX"
  }, {
    code: "691",
    name: "Micronesia (+691)",
    countryCode: "FM"
  }, {
    code: "373",
    name: "Moldova (+373)",
    countryCode: "MD"
  }, {
    code: "377",
    name: "Monaco (+377)",
    countryCode: "MC"
  }, {
    code: "976",
    name: "Mongolia (+976)",
    countryCode: "MN"
  }, {
    code: "382",
    name: "Montenegro (+382)",
    countryCode: "ME"
  }, {
    code: "1664",
    name: "Montserrat (+1664)",
    countryCode: "MS"
  }, {
    code: "212",
    name: "Morocco (+212)",
    countryCode: "MA"
  }, {
    code: "258",
    name: "Mozambique (+258)",
    countryCode: "MZ"
  }, {
    code: "95",
    name: "Myanmar (+95)",
    countryCode: "MM"
  }, {
    code: "264",
    name: "Namibia (+264)",
    countryCode: "NA"
  }, {
    code: "674",
    name: "Nauru (+674)",
    countryCode: "NR"
  }, {
    code: "977",
    name: "Nepal (+977)",
    countryCode: "NP"
  }, {
    code: "31",
    name: "Netherlands (+31)",
    countryCode: "NL"
  }, {
    code: "687",
    name: "New Caledonia (+687)",
    countryCode: "NC"
  }, {
    code: "64",
    name: "New Zealand (+64)",
    countryCode: "NZ"
  }, {
    code: "505",
    name: "Nicaragua (+505)",
    countryCode: "NI"
  }, {
    code: "227",
    name: "Niger (+227)",
    countryCode: "NE"
  }, {
    code: "234",
    name: "Nigeria (+234)",
    countryCode: "NG"
  }, {
    code: "683",
    name: "Niue (+683)",
    countryCode: "NU"
  }, {
    code: "672",
    name: "Norfolk Islands (+672)",
    countryCode: "NF"
  }, {
    code: "850",
    name: "North Korea (+850)",
    countryCode: "KP"
  }, {
    code: "670",
    name: "Northern Mariana Islands (+670)",
    countryCode: "MP"
  }, {
    code: "47",
    name: "Norway (+47)",
    countryCode: "NO"
  }, {
    code: "968",
    name: "Oman (+968)",
    countryCode: "OM"
  }, {
    code: "92",
    name: "Pakistan (+92)",
    countryCode: "PK"
  }, {
    code: "680",
    name: "Palau (+680)",
    countryCode: "PW"
  }, {
    code: "970",
    name: "Palestine (+970)",
    countryCode: "PS"
  }, {
    code: "507",
    name: "Panama (+507)",
    countryCode: "PA"
  }, {
    code: "675",
    name: "Papua New Guinea (+675)",
    countryCode: "PG"
  }, {
    code: "595",
    name: "Paraguay (+595)",
    countryCode: "PY"
  }, {
    code: "51",
    name: "Peru (+51)",
    countryCode: "PE"
  }, {
    code: "63",
    name: "Philippines (+63)",
    countryCode: "PH"
  }, {
    code: "48",
    name: "Poland (+48)",
    countryCode: "PL"
  }, {
    code: "351",
    name: "Portugal (+351)",
    countryCode: "PT"
  }, {
    code: "1787",
    name: "Puerto Rico (+1787)",
    countryCode: "PR"
  }, {
    code: "974",
    name: "Qatar (+974)",
    countryCode: "QA"
  }, {
    code: "262",
    name: "Reunion (+262)",
    countryCode: "RE"
  }, {
    code: "40",
    name: "Romania (+40)",
    countryCode: "RO"
  }, {
    code: "7",
    name: "Russia (+7)",
    countryCode: "RU"
  }, {
    code: "250",
    name: "Rwanda (+250)",
    countryCode: "RW"
  }, {
    code: "290",
    name: "Saint Helena (+290)",
    countryCode: "SH"
  }, {
    code: "1869",
    name: "Saint Kitts & Nevis (+1869)",
    countryCode: "KN"
  }, {
    code: "1758",
    name: "Saint Lucia (+1758)",
    countryCode: "LC"
  }, {
    code: "508",
    name: "Saint Pierre and Miquelon (+508)",
    countryCode: "PM"
  }, {
    code: "685",
    name: "Samoa (+685)",
    countryCode: "WS"
  }, {
    code: "1784",
    name: "Saint Vincent and the Grenadines (+1784)",
    countryCode: "VC"
  }, {
    code: "378",
    name: "San Marino (+378)",
    countryCode: "SM"
  }, {
    code: "239",
    name: "Sao Tome & Principe (+239)",
    countryCode: "ST"
  }, {
    code: "966",
    name: "Saudi Arabia (+966)",
    countryCode: "SA"
  }, {
    code: "221",
    name: "Senegal (+221)",
    countryCode: "SN"
  }, {
    code: "381",
    name: "Serbia (+381)",
    countryCode: "RS"
  }, {
    code: "248",
    name: "Seychelles (+248)",
    countryCode: "SC"
  }, {
    code: "232",
    name: "Sierra Leone (+232)",
    countryCode: "SL"
  }, {
    code: "65",
    name: "Singapore (+65)",
    countryCode: "SG"
  }, {
    code: "1782",
    name: "Sint Maarten (+1782)",
    countryCode: "SX"
  }, {
    code: "421",
    name: "Slovakia (+421)",
    countryCode: "SK"
  }, {
    code: "386",
    name: "Slovenia (+386)",
    countryCode: "SI"
  }, {
    code: "677",
    name: "Solomon Islands (+677)",
    countryCode: "SB"
  }, {
    code: "252",
    name: "Somalia (+252)",
    countryCode: "SO"
  }, {
    code: "27",
    name: "South Africa (+27)",
    countryCode: "ZA"
  }, {
    code: "82",
    name: "South Korea (+82)",
    countryCode: "KR"
  }, {
    code: "211",
    name: "South Sudan (+211)",
    countryCode: "SS"
  }, {
    code: "34",
    name: "Spain (+34)",
    countryCode: "ES"
  }, {
    code: "94",
    name: "Sri Lanka (+94)",
    countryCode: "LK"
  }, {
    code: "249",
    name: "Sudan (+249)",
    countryCode: "SD"
  }, {
    code: "597",
    name: "Suriname (+597)",
    countryCode: "SR"
  }, {
    code: "268",
    name: "Swaziland (+268)",
    countryCode: "SZ"
  }, {
    code: "46",
    name: "Sweden (+46)",
    countryCode: "SE"
  }, {
    code: "41",
    name: "Switzerland (+41)",
    countryCode: "CH"
  }, {
    code: "963",
    name: "Syria (+963)",
    countryCode: "SY"
  }, {
    code: "886",
    name: "Taiwan (+886)",
    countryCode: "TW"
  }, {
    code: "7",
    name: "Tajikstan (+7)",
    countryCode: "TJ"
  }, {
    code: "255",
    name: "Tanzania (+255)",
    countryCode: "TZ"
  }, {
    code: "66",
    name: "Thailand (+66)",
    countryCode: "TH"
  }, {
    code: "670",
    name: "Timor-Leste (+670)",
    countryCode: "TL"
  }, {
    code: "228",
    name: "Togo (+228)",
    countryCode: "TG"
  }, {
    code: "676",
    name: "Tonga (+676)",
    countryCode: "TO"
  }, {
    code: "1868",
    name: "Trinidad & Tobago (+1868)",
    countryCode: "TT"
  }, {
    code: "216",
    name: "Tunisia (+216)",
    countryCode: "TN"
  }, {
    code: "90",
    name: "Turkey (+90)",
    countryCode: "TR"
  }, {
    code: "993",
    name: "Turkmenistan (+993)",
    countryCode: "TM"
  }, {
    code: "1649",
    name: "Turks & Caicos Islands (+1649)",
    countryCode: "TC"
  }, {
    code: "688",
    name: "Tuvalu (+688)",
    countryCode: "TV"
  }, {
    code: "256",
    name: "Uganda (+256)",
    countryCode: "UG"
  }, {
    code: "380",
    name: "Ukraine (+380)",
    countryCode: "UA"
  }, {
    code: "971",
    name: "United Arab Emirates (+971)",
    countryCode: "AE"
  }, {
    code: "44",
    name: "United Kingdom (+44)",
    countryCode: "GB"
  }, {
    code: "1",
    name: "United States (+1)",
    countryCode: "US"
  }, {
    code: "598",
    name: "Uruguay (+598)",
    countryCode: "UY"
  }, {
    code: "7",
    name: "Uzbekistan (+7)",
    countryCode: "UZ"
  }, {
    code: "678",
    name: "Vanuatu (+678)",
    countryCode: "VU"
  }, {
    code: "379",
    name: "Vatican City (+379)",
    countryCode: "VA"
  }, {
    code: "58",
    name: "Venezuela (+58)",
    countryCode: "VE"
  }, {
    code: "84",
    name: "Vietnam (+84)",
    countryCode: "VN"
  }, {
    code: "1284",
    name: "Virgin Islands - British (+1284)",
    countryCode: "VG"
  }, {
    code: "1340",
    name: "Virgin Islands - US (+1340)",
    countryCode: "VI"
  }, {
    code: "681",
    name: "Wallis & Futuna (+681)",
    countryCode: "WF"
  }, {
    code: "967",
    name: "Yemen (+967)",
    countryCode: "YE"
  }, {
    code: "260",
    name: "Zambia (+260)",
    countryCode: "ZM"
  }, {
    code: "263",
    name: "Zimbabwe (+263)",
    countryCode: "ZW"
  }];
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-700 mb-4">WhatsApp Chat</h1>
            <p className="text-lg text-gray-600">
              Send WhatsApp messages without saving the number
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <div>
              <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-2">
                Country Code:
              </label>
              <select id="countryCode" value={countryCode} onChange={e => setCountryCode(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                {countryOptions.map(country => <option key={country.countryCode} value={country.code}>
                    {country.name}
                  </option>)}
              </select>
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number:
              </label>
              <input type="text" id="mobileNumber" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter mobile number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message:
              </label>
              <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={5} className="resize-vertical" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={sendWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Send via WhatsApp
              </Button>
              <Button onClick={sendBusinessWhatsApp} variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-4 rounded-md transition-colors">
                WhatsApp Business
              </Button>
            </div>
          </div>

          
        </div>
      </main>
      <Footer />
    </div>;
};
export default WaMe91;