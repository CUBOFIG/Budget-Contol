export const checkBudget = (budget, residuary) => {

  let category;

  if((budget / 4) > residuary){
    category = "alert alert-danger"
  }else if((budget / 2) >= residuary){
    category = "alert alert-warning"
  }else{
    category = "alert alert-success"
  }

  return category

}
