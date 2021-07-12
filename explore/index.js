const zones = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Algiers",
  "Africa/Bissau",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/El_Aaiun",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Khartoum",
  "Africa/Lagos",
  "Africa/Maputo",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/San_Luis",
  "America/Asuncion",
  "America/Atikokan",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Bogota",
  "America/Boise",
  "America/Cancun",
  "America/Caracas",
  "America/Cayenne",
  "America/Chicago",
  "America/Chihuahua",
  "America/Costa_Rica",
  "America/Creston",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Edmonton",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Glace_Bay",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Jamaica",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Managua",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Miquelon",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Ojinaga",
  "America/Panama",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Puerto_Rico",
  "America/Rainy_River",
  "America/Regina",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Scoresbysund",
  "America/Sitka",
  "America/St_Johns",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Baghdad",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Chita",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kathmandu",
  "Asia/Khandyga",
  "Asia/Kolkata",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Riyadh",
  "Asia/Samarkand",
  "Asia/Sakhalin",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faroe",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Helsinki",
  "Europe/Istanbul",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Lisbon",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Reunion",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Efate",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Wake",
  "Pacific/Wallis",
];
const shapes = ["flat", "step", "dst", "other"];

const transitionsForTimezone = (tzName, year) => {
  const transitions = [];
  const tz = Temporal.TimeZone.from(tzName);
  let instant = Temporal.Instant.fromEpochMilliseconds(
    new Date(year, 0, 2).getTime()
  );
  while (instant && instant.toZonedDateTimeISO(tz).year == year) {
    transitions.push([
      instant.toZonedDateTimeISO(tz).toPlainDate().toString(),
      tz.getOffsetStringFor(instant),
    ]);
    instant = tz.getNextTransition(instant);
  }
  return transitions.map((d) => d.join("  ")).join("\n");
};

const component = () => {
  const hoverEvent = d3.dispatch("enter", "exit");
  const xScale = d3.scaleLinear().domain([0, 52]);
  const yearScale = d3
    .scaleBand()
    .domain([
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ]);
  const yScale = d3.scaleLinear().domain([-12, 14]);
  const line = fc
    .seriesSvgLine()
    .crossValue((_, i) => i)
    .xScale(xScale)
    .yScale(yScale)
    .mainValue((d) => d)
    .decorate((sel) => {
      sel
        .style("stroke-width", (d) => d.count / 2)
        .style("opacity", (d) => (d.shape === "flat" ? 0.3 : 0.8));
    });
  const hitTestLine = fc
    .seriesSvgLine()
    .crossValue((_, i) => i)
    .xScale(xScale)
    .yScale(yScale)
    .mainValue((d) => d)
    .decorate((sel) => {
      sel
        .style("stroke-width", (d) => d.count / 2 + 5)
        .style("stroke", "transparent")
        .style("opacity", "0.5")
        .style("pointer-events", "all")
        .on("mouseenter", (e, d) => {
          d3.select(e.currentTarget).style("stroke", "yellow");
          hoverEvent.call("enter", this, d);
        })
        .on("mouseleave", (e, d) => {
          d3.select(e.currentTarget).style("stroke", "transparent");
          hoverEvent.call("exit", this, d);
        });
    });

  const offsetAxis = d3.axisRight(yScale).ticks(5);
  const dateAxis = d3.axisBottom(yearScale).ticks(2);
  const containerDataJoin = fc.dataJoin("d3fc-group", "tzyear");
  const plotAreaDataJoin = fc.dataJoin("d3fc-svg", "svg-plot-area");
  const dateDataJoin = fc.dataJoin("text", "date");
  const axisDataJoin = fc.dataJoin("d3fc-svg", "axis");
  const dateAxisDataJoin = fc.dataJoin("d3fc-svg", "date-axis");

  const base = (selection) => {
    selection.each((data, index, group) => {
      const container = containerDataJoin(d3.select(group[index]), [data]);

      container
        .style("position", "relative")
        .style("height", "100%")
        .style("display", "block")
        .attr("auto-resize", "");

      dateDataJoin(container, [data.year])
        .style("position", "absolute")
        .style("bottom", "20px")
        .style("right", "35px")
        .style("font-size", "90px")
        .style("opacity", "0.2")
        .text((d) => d);

      plotAreaDataJoin(container, [data])
        .style("position", "absolute")
        .style("top", "0")
        .style("bottom", "0")
        .style("left", "0")
        .style("right", "20px")
        .on("measure", (event) => {
          const { width, height } = event.detail;
          xScale.range([0, width]);
          yScale.range([height, 0]);
          yearScale.range([0, width]);
        })
        .on("draw", (event, d) => {
          const { child } = event.detail;
          d3.select(child)
            .selectAll("g")
            .data(d, (d) => d.year)
            .join(
              (enter) =>
                enter
                  .append("g")
                  .attr("class", (d) => d.shape)
                  .call(line),
              (update) => update.select("g").call(line),
              (exit) => exit.remove()
            );
          d3.select(child)
            .selectAll("g.hit")
            .data(d, (d) => d.year)
            .join(
              (enter) =>
                enter.append("g").attr("class", "hit").call(hitTestLine),
              (update) => update.select("g").call(hitTestLine),
              (exit) => exit.remove()
            );
        });

      axisDataJoin(container, [data])
        .style("position", "absolute")
        .style("top", "0")
        .style("bottom", "0")
        .style("right", "0")
        .style("width", "20px")
        .on("draw", (event, d) => {
          const { child } = event.detail;
          d3.select(child).call(offsetAxis);
        });

      dateAxisDataJoin(container, [data])
        .style("position", "absolute")
        .style("bottom", "0")
        .style("height", "20px")
        .style("right", "0")
        .style("left", "0")
        .on("draw", (event, d) => {
          const { child } = event.detail;
          d3.select(child).call(dateAxis);
        });

      container.each((d, i, nodes) => nodes[i].requestRedraw());
    });
  };

  fc.rebind(base, hoverEvent, "on");

  return base;
};

const transformData = (dataForYear, year) => {
  const series = dataForYear.map((d) => {
    return Object.assign(d.data, {
      zone: d.zone,
      shape: d.shape,
      year,
      key: d.data.join(","),
    });
  });
  return Object.assign(series, { year });
};

let filterText = "";
let currentYear = 0;

d3.json("../data.json").then((dataForYears) => {
  // decode the data
  dataForYears.forEach((year, i) => {
    year.forEach((line) => {
      line.zone = zones[line.z];
      line.shape = shapes[line.s];
      let data = [];
      if (Array.isArray(line.d)) {
        for (let i = 0; i < line.d.length - 1; i += 2) {
          const newStuff = Array(line.d[i + 1]).fill(line.d[i]);
          data = data.concat(newStuff);
        }
      } else {
        data = Array(53).fill(line.d);
      }
      line.data = data;
    });
  });

  // add a slider
  const slider = d3
    .sliderHorizontal()
    .min(1900)
    .max(dataForYears.length + 1900 - 1)
    .step(1)
    .width(650)
    .displayValue(false)
    .tickFormat(d3.format(".0f"))
    .on("onchange", (val) => {
      currentYear = val - 1900;
      render();
    });

  d3.select("#slider")
    .append("svg")
    .attr("width", 700)
    .attr("height", 40)
    .append("g")
    .attr("transform", "translate(30,10)")
    .call(slider);

  d3.select("#filterInput").on("keyup", (d) => {
    filterText = d.srcElement.value;
    render();
  });

  const render = () => {
    const yearIndex = currentYear;

    const chart = component()
      .on("enter", (evt) => {
        const zones = evt.zones.join("\n");
        const transitions = transitionsForTimezone(
          evt.zones[0],
          1900 + yearIndex
        );
        d3.select("#info")
          .style("display", "block")
          .text(zones + "\n\n" + transitions);
      })
      .on("exit", () => {
        d3.select("#info").style("display", "none").text("");
      });

    // filter
    const dataForYear = transformData(
      dataForYears[yearIndex],
      1900 + yearIndex
    ).filter((d) => d.zone.toLowerCase().includes(filterText.toLowerCase()));

    // group dataForYear by key
    const dataForYearByKey = d3.group(dataForYear, (d) => d.key);
    const grouped = [...dataForYearByKey].map((item) =>
      Object.assign(item[1][0], {
        count: item[1].length,
        zones: item[1].map((d) => d.zone),
      })
    );
    grouped.year = 1900 + yearIndex;

    d3.select("#container").datum(grouped).call(chart);
  };

  render(0);
});
