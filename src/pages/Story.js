// import React from "react";

// const Story = () => {
//   return (
//     <div>
//       <h2>Unsere Story</h2>
//     </div>
//   );
// };

// export default Story;

import React, { Fragment, useState } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

function Story(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DatePicker
        disableToolbar
        variant="inline"
        label="Only calendar"
        helperText="No year selection"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />
    </Fragment>
  );
}

export default Story;