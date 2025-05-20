import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "../../../data/fluStats.json";

import { Headline, ChartsList, FormContainer } from "./Charts.styled";

import MortalityChart from "./Charts/MortalityChart";
import GeneralChart from "./Charts/GeneralChart";
import IntensiveRate from "./Charts/IntensiveRateChart";

const Charts = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleChange = (event) => {
    console.log("event.target.value :>> ", event.target.value);
    setSelectedYear(parseInt(event.target.value));
  };

  const selectedData =
    data.years.find((y) => y.year === selectedYear)?.data || [];

  return (
    <>
      <Headline>
        Статистика захворюваності на грип та ГРВІ в Україні за {selectedYear}{" "}
        рік
      </Headline>
      <FormContainer>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Оберіть рік:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedYear}
            label="Рік"
            onChange={handleChange}
          >
            {data.years.map((year) => (
              <MenuItem key={year.year} value={year.year}>
                {year.year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormContainer>

      <ChartsList>
        <li>
          <GeneralChart selectedData={selectedData} />
        </li>
        <li>
          <IntensiveRate selectedData={selectedData} />
        </li>
        <li>
          <MortalityChart selectedData={selectedData} />
        </li>
      </ChartsList>
    </>
  );
};

export default Charts;
