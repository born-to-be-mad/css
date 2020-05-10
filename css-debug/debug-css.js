// it randomizes the outline colors, which will make it easier instead of having all the outlines with a single color.
[].forEach
.call(
  document.querySelectorAll("*"),
  function(a){
	  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
	  }
);