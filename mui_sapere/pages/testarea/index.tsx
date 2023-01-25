import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const TestArea = () => {
  const [countries, setCountries] = useState<[]>([]);
  const [searchCountry, setSearchCountry] = useState<string>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearchCountryChange = (e) => {
    setSearchCountry(e.target.value);
  }

  const fetchCountriesData = async () => {
    const countriesData = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
                                    .then(response => response.json())

    setCountries(countriesData);
  }

  useEffect(() => {

    if(searchCountry)
      fetchCountriesData();

    }, [searchCountry])

  const arrData = [1, 2, 3, 8];
  const objData = {
    name: "John",
    occupation: "Software Engineer",
  };

  console.log(objData, { ...objData, name: "Johnn", age: 21 }); // overrides default object props
  return (
    <>
      <Box p={2}>
        <Typography variant="h2">TEST AREA</Typography>

        <Divider />

        <Typography mt={2} variant="h3">
          Spread Operator
        </Typography>
        <Typography variant="body1">
          This data comes from an array: {...arrData}
        </Typography>

        <Typography mt={2} variant="h3">
          Search a country [UseMemo()]
        </Typography>

        <TextField
          sx={{
            my: 2,
            width: "100%",
          }}
          id="countryInput"
          label="Country name"
          variant="outlined"
          value={searchCountry}
          onChange={handleSearchCountryChange}
        />

        {(searchCountry) && (
          <>
          <Typography variant="h3">{`Countries with "${searchCountry}" on name:`}</Typography>
        
        <Grid container spacing={2} mt={1}>
          {countries.length > 0 && countries.map((country, index) => {
            return (
              <Grid key={index} item md={3} sm={6} xs={12}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    maxHeight: "85px"
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h4" noWrap>
                      {country.name.official}
                    </Typography>
                    <img
                      style={{
                        width: "50px",
                      }}
                      src={country.flags.svg}
                      alt={`flag`}
                    />
                  </Box>
                  <Typography variant="overline">{country.cioc ?? "NO Abreviattion"}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        </>)}

        <Divider/>
        <Typography variant="h2">
          Modal test
        </Typography>

      <Button variant="outlined" color="inherit" onClick={() => setDialogOpen(true)}>
        Open form dialog
      </Button>
      <Dialog open={dialogOpen} onClose={() => console.log("Closed dialog")}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="inherit" onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="inherit" onClick={() => setDialogOpen(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </>
  );
};

export default TestArea;
