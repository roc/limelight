define([
  'require',
  '../response',
  'lodash'
], function (require, Response, _) {
  
  var LicensingResponse = Response.extend({
    
    url: /\/licensing\/?.*\?(.*)/,
    
    queryId: 'all-entities',
    
    getData: function (query) {
      
      if (query.group_by == 'authorityUrlSlug') {
        return this.getAuthorities(query);
      }
      
      if (query.group_by == 'licenceUrlSlug') {
        return this.getLicences(query);
      }
      
    },
    
    getAuthorities: function (query) {
      var values = _.map(this.authorities, function (name) {
        return {
          authorityUrlSlug: name.replace(/ /g, '-').toLowerCase(),
          authorityName: [name]
        }
      }, this);
      
      return values;
    },
    
    getLicences: function (query) {
      var values = _.map(this.licences, function (name) {
        return {
          licenceUrlSlug: name.replace(/ /g, '-').toLowerCase(),
          licenceName: [name]
        }
      }, this);
      
      return values;
    },
    
    authorities: [
      "Aberdeen City Council",
      "Aberdeenshire Council",
      "Amber Valley Borough Council",
      "Angus Council",
      "Ards Borough Council",
      "Argyll and Bute Council",
      "Armagh City and District Council",
      "Arun District Council",
      "Ashfield District Council",
      "Aylesbury Vale District Council",
      "Babergh District Council",
      "Ballymena Borough Council",
      "Ballymoney Borough Council",
      "Barnsley Metropolitan Borough Council",
      "Barrow in Furness Borough Council",
      "Basildon District Council",
      "Basingstoke and Deane Borough Council",
      "Bedford Borough Council",
      "Belfast Health and Social Care trust",
      "Birmingham City Council",
      "Blaby District Council",
      "Blackburn with Darwen Borough Council",
      "Blackpool Borough Council",
      "Blaenau Gwent County Borough Council",
      "Bolsover District Council",
      "Borough Council of King's Lynn and West Norfolk",
      "Boston Borough Council",
      "Bracknell Forest Borough Council",
      "Bradford Metropolitan District Council",
      "Braintree District Council",
      "Breckland Council",
      "Brentwood Borough Council",
      "Bridgend County Borough Council",
      "Brighton and Hove City Council",
      "Bristol City Council",
      "Bromsgrove District Council",
      "Broxbourne Borough Council",
      "Broxtowe Borough Council",
      "Burnley Borough Council",
      "Bury Metropolitan Borough Council",
      "Caerphilly County Borough Council",
      "Calderdale Metropolitan Borough Council",
      "Cambridge City Council",
      "Cannock Chase District Council",
      "Canterbury City Council",
      "Cardiff County Council",
      "Carlisle City Council",
      "Carrickfergus Borough Council",
      "Castle Point Borough Council",
      "Central Bedfordshire Council",
      "Ceredigion County Council",
      "Charnwood Borough Council",
      "Chelmsford City Council",
      "Cheltenham Borough Council",
      "Cherwell District Council",
      "Cheshire East",
      "Cheshire West and Chester",
      "Chesterfield Borough Council",
      "Chiltern District Council",
      "Chorley Borough Council",
      "Christchurch Borough Council",
      "City and County of Swansea",
      "City of Edinburgh Council",
      "City of London",
      "City of York Council",
      "Clackmannanshire Council",
      "Colchester Borough Council",
      "Coleraine Borough Council",
      "Corby Borough Council",
      "Cornwall Council",
      "Cotswold District Council",
      "Coventry City Council",
      "Crawley Borough Council",
      "Dacorum Borough Council",
      "Dartford Borough Council",
      "Daventry District Council",
      "Denbighshire County Council",
      "Department For Education",
      "Department of Agriculture and Rural Development",
      "Derbyshire County Council",
      "Derbyshire Dales District Council",
      "Doncaster Metropolitan Borough Council",
      "Driver and Vehicle Licensing Agency",
      "Dungannon and South Tyrone Borough Council",
      "Durham County Council",
      "East Ayrshire Council",
      "East Devon District Council",
      "East Dorset District Council",
      "East Dunbartonshire Council",
      "East Hampshire District Council",
      "East Hertfordshire District Council",
      "East Northamptonshire District Council",
      "East Renfrewshire Council",
      "East Staffordshire Borough Council",
      "Eastbourne Borough Council",
      "Eastleigh Borough Council",
      "Epping Forest District Council",
      "Epsom and Ewell Borough Council",
      "Erewash Borough Council",
      "Essex County Council",
      "Exeter City Council",
      "Falkirk Council",
      "Fareham Borough Council",
      "Fenland District Council",
      "Flintshire County Council",
      "Food Standards Agency",
      "Forest Heath District Council",
      "Forest of Dean District Council",
      "Gateshead Metropolitan Borough Council",
      "GDS Test Authority",
      "GDS Test Authority 2",
      "GDS Test Authority 3",
      "Gedling Borough Council",
      "Gloucester City Council",
      "Gloucestershire County Council",
      "Gosport Borough Council",
      "Gravesham Borough Council",
      "Great Yarmouth Borough Council",
      "Guildford Borough Council",
      "Halton Borough Council",
      "Harborough District Council",
      "Harrogate Borough Council",
      "Hart District Council",
      "Hartlepool Borough Council",
      "Havant Borough Council",
      "Herefordshire Council",
      "Hertsmere Borough Council",
      "High Peak Borough Council",
      "Huntingdonshire District Council",
      "Inverclyde Council",
      "Ipswich Borough Council",
      "Isle of Anglesey County Council",
      "Kent County Council",
      "Kettering Borough Council",
      "Kingston upon Hull City Council",
      "Kirklees Council",
      "Lancaster City Council",
      "Larne Borough Council",
      "Leeds City Council",
      "Leicester City Council",
      "Lewes District Council",
      "Lichfield District Council",
      "London Borough of Barking and Dagenham",
      "London Borough of Barnet",
      "London Borough of Bexley",
      "London Borough of Bromley",
      "London Borough of Croydon",
      "London Borough of Ealing",
      "London Borough of Enfield",
      "London Borough of Hammersmith & Fulham",
      "London Borough of Haringey",
      "London Borough of Harrow",
      "London Borough of Havering",
      "London Borough of Hillingdon",
      "London Borough of Hounslow",
      "London Borough of Islington",
      "London Borough of Lambeth",
      "London Borough of Lewisham",
      "London Borough of Merton",
      "London Borough of Newham",
      "London Borough of Redbridge",
      "London Borough of Richmond upon Thames",
      "London Borough of Southwark",
      "London Borough of Sutton",
      "London Borough of Tower Hamlets",
      "London Borough of Waltham Forest",
      "London Borough of Wandsworth",
      "London Borough of Westminster",
      "Luton Borough Council",
      "Maidstone Borough Council",
      "Malvern Hills District Council",
      "Medway Council",
      "Merthyr Tydfil County Borough Council",
      "Mid Suffolk District Council",
      "Middlesbrough Council",
      "Milton Keynes Council",
      "Mole Valley District Council",
      "Monmouthshire County Council",
      "Moray Council",
      "Neath Port Talbot County Council",
      "New Forest District Council",
      "Newark and Sherwood District Council",
      "Newcastle under Lyme Borough Council",
      "Newport City Council",
      "Norfolk County Council",
      "North Devon District Council",
      "North East Derbyshire District Council",
      "North East Lincolnshire Council",
      "North Hertfordshire District Council",
      "North Kesteven District Council",
      "North Norfolk District Council",
      "North Somerset Council",
      "North Tyneside Council",
      "North Warwickshire Borough Council",
      "North West Leicestershire District Council",
      "Northampton Borough Council",
      "Northern Health and Social Care Trust",
      "Northern Ireland Environment Agency",
      "Northumberland County Council",
      "Norwich City Council",
      "Nottingham City Council",
      "Nuneaton and Bedworth Borough Council",
      "Oadby and Wigston Borough Council",
      "Office for Standards in Education, Children's Services and Skills",
      "Oldham Metropolitan Borough Council",
      "Oxford City Council",
      "Oxfordshire County Council",
      "Perth and Kinross Council",
      "Peterborough City Council",
      "Plymouth City Council",
      "Poole Borough Council",
      "Portsmouth City Council",
      "Powys County Council",
      "Preston City Council",
      "Purbeck District Council",
      "Reading Borough Council",
      "Redcar & Cleveland Borough Council",
      "Redditch Borough Council",
      "Reigate and Banstead Borough Council",
      "Rhondda Cynon Taff County Borough Council",
      "Ribble Valley Borough Council",
      "Rochford District Council",
      "Rother District Council",
      "Royal Borough of Greenwich",
      "Royal Borough of Kensington and Chelsea",
      "Rugby Borough Council",
      "Runnymede Borough Council",
      "Rushcliffe Borough Council",
      "Rushmoor Borough Council",
      "Ryedale District Council",
      "Sandwell Metropolitan Borough Council",
      "Scarborough Borough Council",
      "Sedgemoor District Council",
      "Sefton Metropolitan Borough Council",
      "Selby District Council",
      "Sevenoaks District Council",
      "Sheffield City Council",
      "Shropshire Council",
      "Solihull Metropolitan Borough Council",
      "Somerset County Council",
      "South Ayrshire Council",
      "South Bucks District Council",
      "South Cambridgeshire District Council",
      "South Derbyshire District Council",
      "South Gloucestershire Council",
      "South Hams District Council",
      "South Kesteven District Council",
      "South Northamptonshire Council",
      "South Oxfordshire District Council",
      "South Ribble Borough Council",
      "South Staffordshire District Council",
      "South Tyneside Council",
      "Southampton City Council",
      "Spelthorne Borough Council",
      "St Albans District Council",
      "St Edmundsbury Borough Council",
      "Stafford Borough Council",
      "Staffordshire Moorlands District Council",
      "Stevenage Borough Council",
      "Stockton-on-Tees Borough Council",
      "Stoke-on-Trent City Council",
      "Stratford on Avon District Council",
      "Stroud District Council",
      "Sunderland City Council",
      "Surrey County Council",
      "Surrey Heath Borough Council",
      "Swale Borough Council",
      "Tamworth Borough Council",
      "Tandridge District Council",
      "Taunton Deane Borough Council",
      "Teignbridge District Council",
      "Telford & Wrekin Council",
      "Tendring District Council",
      "Test Valley Borough Council",
      "Thanet District Council",
      "Three Rivers District Council",
      "Thurrock Borough Council",
      "Tonbridge and Malling Borough Council",
      "Torbay Council",
      "Trafford Council",
      "Tunbridge Wells Borough Council",
      "Vale of Glamorgan County Council",
      "Vale of White Horse District Council",
      "Wakefield City Metropolitan District Council",
      "Walsall Council",
      "Warwick District Council",
      "Watford Borough Council",
      "Waverley Borough Council",
      "Wealden District Council",
      "Wellingborough Borough Council",
      "Welwyn Hatfield District Council",
      "West Devon Borough Council",
      "West Dorset District Council",
      "West Lancashire District Council",
      "West Lindsey District Council",
      "West Lothian Council",
      "West Oxfordshire District Council",
      "West Somerset Council",
      "Weymouth and Portland Borough Council",
      "Wigan Council",
      "Wiltshire County Council",
      "Winchester City Council",
      "Wirral Metropolitan Borough Council",
      "Woking Borough Council",
      "Wolverhampton City Council",
      "Worcester City Council",
      "Worcestershire County Council",
      "Worthing Borough Council",
      "Wrexham County Borough Council",
      "Wychavon District Council",
      "Wycombe District Council",
      "Wyre Borough Council",
      "Wyre Forest District Council"
    ],
    
    licences: [
      "Ability to place tables and chairs in the road",
      "Actuaries",
      "Adult placement",
      "Adult placement service",
      "Adventure Activities Licence",
      "Advocate",
      "Air Conditioning System Energy Assessor",
      "Air travel organiser's licence (ATOL)",
      "Animal boarding establishment licence",
      "Animal boarding establishments",
      "Animal by-products approval",
      "Animal Movement",
      "Animal movement (cattle) notification",
      "Animal movement notification",
      "Animal transport authorisation (long/short)",
      "Animal transport, long journey vehicle approval",
      "Application for Business Boat Licence",
      "Application for Registration of an Independent School",
      "Application for the Childcare Register: childcare provider on domestic or non-domestic premises",
      "Application for the Childcare Register: childminder",
      "Application for the Childcare Register: home childcarer",
      "Application for the Early Years Register: childcare provider on domestic or non-domestic premises",
      "Application for the Early Years Register: childminder",
      "Application to register as a children's social care provider: adoption support agency",
      "Application to register as a children's social care provider: children's home",
      "Application to register as a children's social care provider: independent fostering service",
      "Application to register as a children's social care provider: residential family centre",
      "Application to register as a children's social care provider: voluntary adoption agency",
      "Application to use street or pavement space for displays",
      "Approval of a centre to offer SQA qualifications",
      "Approval of course leading to external qualification",
      "Approval of Home Child Carers",
      "Approval of independent school inspector",
      "Approval of independent school inspectorates",
      "Approval of meat plants with veterinary attendance",
      "Approval of premises for civil marriage",
      "Approval of premises for civil marriage and civil partnership",
      "Approved Driving Instructor",
      "Architect",
      "Assembly Centre Approval",
      "Auction premises registration",
      "Audit registration",
      "Authorisation for a firm to undertake UK audit work",
      "Authorisation to undertake audit work",
      "Barrister",
      "Boat hire licence",
      "Builder, competent person accreditor",
      "Buildings: Indvidual and corporate approved inspectors",
      "Busking licence",
      "Camp site licence",
      "Car boot sale authorisation",
      "Caravan and camping site licence",
      "Care at home services",
      "Certificate enabling a premises to offer tourist accommodation",
      "Certificate of fitness for properties built before 1945",
      "Charitable collection permit",
      "Chemical supply and storage (pesticide spraying etc)",
      "Childminder",
      "Claims management",
      "Club licensing",
      "Commercial (Non-Domestic) Energy Assessor",
      "Company registration",
      "Consents for leaflet distribution",
      "Conveyancers",
      "Cooling tower notification",
      "Day care facilities for under 12s",
      "Day nurseries",
      "Declaration of compliance with NIEA greenfield soils guidance 1",
      "Depositing material at sea licence (FEPA)",
      "Direct appointment as an approved certifier of design or construction",
      "Discharge of trade effluent permit",
      "Dispensation to allow the display of fireworks late at night",
      "Disposal of dredged material at sea",
      "Diving a designated wreck",
      "Domestic Energy Assessor - Existing Buildings",
      "Domiciliary care agencies",
      "Electricity Distribution Licence",
      "Electricity Generation Licence",
      "Electricity Supply Licence",
      "Electricity Transmission Licence",
      "Electricty Interconnector",
      "Emissions trading scheme",
      "Energy assessor",
      "Entertainment",
      "Environmental permitting",
      "Environmental permitting (national level)",
      "Estate agency",
      "Executry practitioners",
      "Fellow of the Institute of Legal Executives",
      "Food premises approval",
      "Food premises registration",
      "Gas appliances or fittings work",
      "Gas Interconnector",
      "Gas shipper",
      "Gas supplier",
      "Gas transporter",
      "Generation, transmission, distribution and supply of electricity",
      "Guard dog kennels",
      "Hairdresser licence",
      "Hairdresser registration",
      "Hazardous Waste Disposal",
      "Hold, keep or release any of the specified species of non-native fish",
      "House in multiple occupancy",
      "House in multiple occupation licence",
      "House to house collection",
      "House to house collection licence",
      "Hypnotism permit",
      "Independent school (children's home)",
      "Independent school standards",
      "Indoor sports entertainment licence",
      "Insolvency practitioner",
      "Insolvency practitioner authorisation",
      "Insolvency practitioner licence",
      "Integrated Pollution Prevention Control (IPPC) permit",
      "Itinerant metal dealer licence",
      "Knife dealer licence",
      "Land drainage consents",
      "Laser or intense pulsed light treatment",
      "Late hours catering licence",
      "Law costs draftsmen",
      "Licence to buy and sell salmon, trout, pike, eel or pollan",
      "Licence to dispose of waste in the sea",
      "Licence to kill or take certain birds and animals",
      "Licence to kill or take certain birds and animals outside 12 mile limit",
      "Licensed Conveyancers",
      "Licenses and consents for structures over, along and under the highway",
      "Listed veterinary nurse",
      "Local air pollution control authorisation (LAPPC), Part C",
      "Marine construction works, land reclamation,beach replenishment licence (FEPA)",
      "Marine works consent",
      "Market Operator",
      "Market operators licence",
      "Market stall licence",
      "Massage and special treatment premises licensing",
      "Massage and special treatment, therapist registration",
      "Metal dealer licence",
      "Miscellaneous Payments",
      "Money laundering registration by professional bodies",
      "Money laundering registration of estate agents",
      "MOT testing authorisation",
      "Motor salvage operator registration",
      "National registration scheme for private landlords",
      "New Marina Application",
      "Nurse agency",
      "Nursing agency",
      "Occasional licence",
      "Occupation of the road in connection with building work",
      "On-Construction Domestic Energy Assessor (OCDEA)",
      "Operational Ratings Assessor (Production of Display Energy Certificates)",
      "Packaging waste registration",
      "Performing animals registration",
      "Permission to place tables and chairs in the road",
      "Personal licence to sell alcohol",
      "Pet shop licence",
      "Petroleum storage licence",
      "Pleasure boats",
      "Pollution prevention and control(PPC)- Part A",
      "Pollution prevention and control(PPC)- Part B",
      "Postal operators",
      "PPC - Dry cleaning",
      "PPC - Petrol Vapour Recovery",
      "PPC - Solvent emissions",
      "Premises licence",
      "Processing personal data",
      "Protected species licensing",
      "Protected wreck site licences",
      "Public entertainment licence",
      "Quarantine kennel",
      "Raised structures",
      "Register as Number Plate Suppliers",
      "Registration as a children's home",
      "Registration carrier / broker of controlled waste",
      "Registration of Farriers",
      "Registration of Independent school",
      "Reporting of pollution inventory data",
      "Reporting of pollution inventory data (part of EPR)",
      "Residential care homes",
      "Residential family centre",
      "Riding establishment",
      "Riding establishment licence",
      "Road/street works operative",
      "Road/street works supervisor",
      "Safety certificates for regulated stands at sports grounds",
      "Safety certificates for sports grounds",
      "Scheme for certificate of design or construction",
      "Scheme provider for certificate of design or construction",
      "School approved for special needs",
      "Scrap metal dealer registration",
      "Second hand dealers",
      "Second hand dealers registration",
      "Sex establishment / sex cinema",
      "Sex shop",
      "Sex shop and cinema licence",
      "Skin piercing and tattooing",
      "Skip licence",
      "Skip operator licence",
      "Slaughterman",
      "Social landlords",
      "Solicitor",
      "Special school approval",
      "Special Waste Disposal",
      "Street collection",
      "Street collection licence",
      "Street trader's licence",
      "Street trading licence",
      "Streetworks and running pipes/cables under road",
      "Sunday trading",
      "Support services providing day care to adults",
      "Tattooists, piercing and electrolysis licence",
      "Temporary event notice",
      "Test Licence",
      "Theatre licence",
      "Transmissible spongiform encephalopathies testing",
      "Transportation & supply of water",
      "Travelling circus animal welfare",
      "Venison dealer licence",
      "Veterinary surgeon",
      "Waste broker",
      "Waste carrier",
      "Waste carrier or broker",
      "Waste electrical and electronic equipment accreditation  scheme",
      "Waste management",
      "Waste management licence",
      "Waste packaging accreditation",
      "Water discharge consent",
      "Water discharge consents",
      "Water environment controlled activities (CAR) consents",
      "Weighbridge operator certificate",
      "Wildlife licence",
      "Window cleaner",
      "Zoo licence"
    ]
    
  });
  
  return LicensingResponse;
});