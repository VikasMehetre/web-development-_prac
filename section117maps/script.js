//in maps any thing can be an key in object only string can be an key
const rest=new Map()
rest.set('name','vikas mehetre')
rest.set(1,'phy')
rest.set(2,'chem')
rest.set(true,'we are open')
rest.set('open',2)
rest.set('close',10)
console.log(rest);
const time=3;
console.log(rest.get(rest.get('open')<time && rest.get('close') >time));
const c=rest.get(rest.get("open")<time ? rest.get("close"):console.log())
// rest.set(document.querySelector("h1"));
console.log(rest);
