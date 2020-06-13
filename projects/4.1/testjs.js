// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu)
  {
    for (let item in menu)
    {

        if (typeof(menu[item]) == 'number')
        {
            
              menu[item] *= 2;
      
        }
    }
  }

  for (let item in menu)
  {
    console.log(menu[item]);
  }
  
  multiplyNumeric(menu);

  for (let item in menu)
  {
    console.log(menu[item]);
  }
