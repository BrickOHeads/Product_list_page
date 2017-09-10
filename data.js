console.log("connected");
fetch('http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1')
.then(
  function(response){
    if (response.status !== 200) {
      console.log("Error occured " + response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data.results);
      let products = data.results;

      // function renderProducts(){
      //   return `
      //     ${products.map(product =>
      //       <div class="product">
      //         <ul>
      //     )}`
      //
      // }
    })
  }
)
