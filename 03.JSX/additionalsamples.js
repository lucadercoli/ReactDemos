/* expressions */
const name = "John";
const element1 = <h1>Hello, {name}</h1>
const element2 = <h1>2 + 2 = {2 + 2}</h1>


/* function */
function fullName(first, last) {
	return first + ' ' + last;
}
const element3 = <h1>Hello, {fullName('John', 'Kennedy')}!</h1>;

/* multiline element */
const element4 = (
	<h2>
	Hello, <b>{fullName('John', 'Kennedy')} </b>!
	</h2>
);

/* child */
const element5 = (
	<div>
	 	<h1> Hello, {fullName('John', 'Kennedy')}!</h1>
		<h2> Welcome in ReactJS with JSX.</h2>
	</div>
);

/* attributes */
const element6 = <img src="./images/hello.png" />;

const imageUrl = "./images/hello1.png";
const element7 = <img src={imageUrl} />;

/* className */
const lastName = "Rossi";
const element8 = (
    <div className="box">
        <h3>Inside the box</h3>
        Hello, <b>{fullName('Mario', lastName)} </b>!
    </div>
);