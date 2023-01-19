const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  pedal: ["01-01", "01-02", "01-06"],
  water: ['01-03', "01-05"],
  food: ["01-04"]
}

nlwSetup.setData(data)
nlwSetup.load()