function calculate(e) {
  e.preventDefault();

  let gauge = parseInt(document.querySelector("[data-js-id=gauge]").value);
  let headCircumference = parseInt(document.querySelector("[data-js-id=headCircumference]").value);
  let raglanLine = parseInt(document.querySelector("[data-js-id=raglanLine]").value);
  let result = document.querySelector("[data-js-id=result]");

  let stichesEachCentimer = gauge / 10
  let totalNumberOfStiches = Math.round(stichesEachCentimer * headCircumference)
  let raglanStiches = raglanLine * 4
  let stichesEachPart =  Math.round((totalNumberOfStiches - raglanStiches) / 3)

  result.innerHTML = `
    <h3 class="mb-4">You need:</h3>
    <p> Stiches Back: ${stichesEachPart} </p>
    <p>  Stiches Front: ${stichesEachPart} </p>
    <p>  Stiches each Sleave: ${stichesEachPart / 2} </p>
    <p>  Stiches each Raglan line: ${raglanLine} (before and after the 13 sleave stiches each)</p>
    <p>  Total Stiches to cast on: ${totalNumberOfStiches}</p>
  `;


}
