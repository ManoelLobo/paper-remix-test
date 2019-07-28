import React from "react";

const content = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      molestie odio eu ante pharetra suscipit. Aenean pellentesque auctor nulla,
      nec consectetur nunc congue vel. Donec volutpat tellus placerat gravida
      sagittis. Mauris vitae leo lorem. In molestie lorem id est lobortis, et
      vehicula sapien egestas. Praesent eleifend turpis et quam suscipit pretium
      nec in urna. Ut non nibh scelerisque, pulvinar est at, condimentum erat.
      Donec vel gravida tellus, quis euismod ipsum. Phasellus fringilla augue
      facilisis, feugiat sapien ac, laoreet nulla. Nunc ac lobortis libero.
    </p>
  </>
);

const Lorem = ({ name = "Page" }) => (
  <div style={{ padding: 10 }}>
    <h1>This is {name}</h1>
    {content}
  </div>
);

export default Lorem;
