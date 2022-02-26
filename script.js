var form = document.getElementById("form")

form.addEventListener("submit", function(e){
	e.preventDefault()
	let search = document.getElementById("search").value

  let on = search.split(' ').join("")

	fetch(`https://api.github.com/users/${on}`).then(response => response.json()).then(data => { console.log(data) 

document.getElementById("result").innerHTML = `
 <a target="_blank" href="https://github.com/${on}"> <img src="${data.avatar_url}"/></a> <div>Name: ${data.name}</div><div>Bio: ${data.bio}</div><div>Followers: ${data.followers}</div>
`
																										
})	
})