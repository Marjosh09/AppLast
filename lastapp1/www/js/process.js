

let process = {
	menu:function(){
					let content = <ul>
			<h1>Months</h1>
			<li><a href='#' onClick={process.page1}>January</a></li>
			<li><a href='#' onClick={process.page2}>February</a></li>
			<li><a href='#' onClick={process.page3}>March</a></li>
			<li><a href='#' onClick={process.page4}>April</a></li>
			<li><a href='#' onClick={process.page5}>May</a></li>
			<li><a href='#' onClick={process.page6}>June</a></li>
			<li><a href='#' onClick={process.page7}>July</a></li>
			<li><a href='#' onClick={process.page8}>August</a></li>
			<li><a href='#' onClick={process.page9}>September</a></li>
			<li><a href='#' onClick={process.page10}>October</a></li>
			<li><a href='#' onClick={process.page11}>November</a></li>
			<li><a href='#' onClick={process.page12}>December</a></li><br/>
			<h1>Zodiac Signs</h1>
			<li><a href='#' onClick={process.page13}>Aquarius</a></li>
			<li><a href='#' onClick={process.page14}>Pisces</a></li>
			<li><a href='#' onClick={process.page15}>Aries</a></li>
			<li><a href='#' onClick={process.page16}>Taurus</a></li>
			<li><a href='#' onClick={process.page17}>Gemini</a></li>
			<li><a href='#' onClick={process.page18}>Cancer</a></li>
			<li><a href='#' onClick={process.page19}>Leo</a></li>
			<li><a href='#' onClick={process.page20}>Virgo</a></li>
			<li><a href='#' onClick={process.page21}>Libra</a></li>
			<li><a href='#' onClick={process.page22}>Scorpio</a></li>
			<li><a href='#' onClick={process.page23}>Sagittarius</a></li>
			<li><a href='#' onClick={process.page24}>Capricorn</a></li>
			

			

			

		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>

  				<center><img src="img/jan.png" ></img></center>

				<p>Characteristics of the Garnet include consistency, endurance,
				 creativity and patience. Although the Garnet is traditionally red in color, the stone ranges from a colorless hue to black but does
				 not come in blue. Garnet is the daily gemstone for Tuesday and the planetary
			 	 gemstone for the zodiac sign of </p><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page2:function(){
		let content = <div>
				 <center><img src="img/feb.png" ></img></center>

 				<p>Those born in February are blessed with a beautiful, rich, vivid violet gemstone that works not only to adorn one
  				is outfit but has an array of healing abilities for a person is physical and mental well being. This stone has been 
  				revered through the ages and continues to be in demand for its well-cut faces, vibrant color and health benefits.</p><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page3:function(){
		let content = <div>
				 <center><img src="img/mar.png" ></img></center>

 				<p>The Aquamarine depicts courage, creativity, health, perception and hope.
 				It is also associated with awareness and spiritual energy. Aquamarine is the planetary gemstone for the zodiac sign of Pisces. </p><
 				br/>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page4:function(){
	let content = <div>
				<center><img src="img/april.png" ></img></center>

 <p>April born individuals are blessed by the world is most precious gemstone resource, the Diamond,
  and are bestowed a healthy, prosperous life by its protective, sterling qualities and attributes.</p>
<br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page5:function(){
	let content = <div>

				 <center><img src="img/may.png" ></img></center>
				 <p>Emerald, often coveted by royalty since time immemorial, is the birthstone for those born in the month of May.
				  Its shimmering hues of green symbolize renewal of life and revitalization,the verdant hues of the Spring
				   season that reaches its peak in the month of May. Emerald is also considered to represent loyalty, friendship and faithfulness. 
				    For those born in the month of May, wearing
				     emeralds helps to enhance and balance their energies . </p>
				<br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page6:function(){
	let content = <div>
				 <center><img src="img/june.png" ></img></center>
				<div className="love">
 <p>Pearl is the only gem that is organic in nature; occurring in certain living mollusk shells and at times is considered to be as precious as diamonds, emeralds and rubies! Pearl signifies faithfulness, friendship and loyalty; and considered a symbol of purity, chastity and modesty . </p>
 </div><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page7:function(){
	let content = <div>
				<center><img src="img/july.png" ></img></center>

 				<div className="love">
 				<p>The ruby was considered the stone of love, of passion, energy and power, promoting a zest for life in the wearer. The other important element, believed to feature in the stone besides fire is blood, tied to one’s life force, a stone that increases energy and vigor. The July birthstone is one of the world’s four precious stones, a gemstone that is strongly tied to earthy qualities, power and ambition in Men.
				 </p>
				 </div><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page8:function(){
	let content = <div>
				<center><img src="img/aug.png" ></img></center>

				 <div className="love">
				 <p> The august birthstone is associated with prosperity, growth, dignity and love. It is also believed that the stone has the power to ward away Evil and nightmares, bestowing peace and progress in ones life. </p>
				 </div><br/><a href='#' onClick={process.menu}></a>
							</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page9:function(){
	let content = <div>
				 <center><img src="img/sep.png" ></img></center>

				 <div className="love">
				 <p> Sapphire, one of the most coveted gemstones of all times; surrounded by lore and legend is the birthstone for those born in the month of September.  </p>

				  <p> This gem signifies truth, faithfulness and sincerity, and was worn by priests during the Middle Ages as a talisman against impure thoughts and temptation. Sapphire is thought to boost intuition and clairvoyance and promote good health. </p>
				 </div><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page10:function(){
	let content = <div>
				<center><img src="img/oct.png" ></img></center>

				 <div className="love">
				 <p> The October birthstone is associated with purity, innocence, hope and faith.This gemstone however, is known as the ‘Peace Stone’, believing to dispel anger, fear, jealousy and aggressiveness to keep the wearer calm and tranquil. Besides peace and progress, the stone is believed to enhance creativity of its wearer. </p>

				  </div><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page11:function(){
	let content = <div>
				<center><img src="img/nov.png" ></img></center>

				 <div className="love">
				 <p> The November birthstone Citrine is widely believed to bestow good fortune and success to the wearer, 
				 earning it the title The of Success Stone.  The belief entails that the stone is used to promote success in business if 
				 placed in the cash box of a shop, worn or carried, awarding it another interesting moniker The Stone Of The Merchants.
				 The Citrine is a golden hued gemstone that encourages vitality and promotes good health of the wearer.
				    </p>

				  </div><br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page12:function(){
	let content = <div>
				 <center><img src="img/dec.png" ></img></center>

				 <div className="love">
				 <p> The stone was  the symbol of wealth and prosperity in many ancient cultures. Qualities like strength, sensitivity, connection to the spiritual realm and protection against evil are attributed to the turquoise. The gemstone is also a symbol of friendship, peace and good fortune.The value of the turquoise is determined by its hardness and richness.  </p>

				  </div>
				<br/><a href='#' onClick={process.menu}></a>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page13:function(){
	let content = <div>
				<center><img src="img/Picture8.jpg"></img></center>
				<center><h1>Aquarius</h1></center>
				<center><h1>(Alias: The Water Carrier)</h1></center>
				<center><h1>January 1 - February 18</h1></center>

				<p>You have always had great insight into other people, Aquarius. You can meet someone and understand them - understand their spirit and what makes them tick almost instantly. This makes you a good judge of character and an excellent leader.</p>
			</div>;
			ReactDOM.render(content,document.getElementById('r'));
	},
	page14:function(){
	let content = <div>
								 <center><img src="img/Picture1.jpg" ></img></center>
		<center><h1>Pisces</h1></center>
		<center><h1>(Alias: The Fish)</h1></center>
		<center><h1>February 19 - March 20</h1></center>

		<p>Pisces, you are wistful, sensitive, kind, intuitive, and dreamy. Not everyone gets you because you are truly a fish of a different color. Your creative nature sometimes defies logic, but somehow you can make progress with even the wildest of ideas. </p></div>;				ReactDOM.render(content,document.getElementById('r'));
	},
	page15:function(){
	let content = <div>
				<center><img src="img/Picture1.jpg" ></img></center>
				<center><h1>Aries</h1></center>
				<center><h1>(Alias: The Ram)</h1></center>
				<center><h1>March 21 - April 19</h1></center>

				<p>The amazing Ram is strong, sure-footed, hard-headed, and up to any challenge it comes up against. But the Ram can also be playful, lighthearted, and a bit mischievous.</p></div>;
							ReactDOM.render(content,document.getElementById('r'));
	},

	page16:function(){
	let content = <div>
					<center><img src="img/Picture11.jpg"></img></center>
					<center><h1>Taurus</h1></center>
					<center><h1>(Alias: The Bull)</h1></center>
					<center><h1>April 20 - May 20</h1></center>
					<p>You are strong, tough, and determined. The Bull, the symbol of your sign, is a perfect reminder of how powerful you are. You are so powerful, in fact, that it can be hard for you to ever rest or take a break. Others turn to you, and you always accept your responsibilities and obligations graciously.</p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page17:function(){

					let content = <div>
					<center><img src="img/Picture12.jpg" ></img></center>
					<center><h1>Gemini</h1></center>
					<center><h1>(Alias: The Twins)</h1></center>
					<center><h1>May 21 - June 20</h1></center>
					<p>People who don't understand you may see you as having diverse personalities because you are a person of many moods and because you always seem to be going in many different directions. Actually, Gemini, you have many facets to your one big personality, and your broad focus allows you to understand all the nuances of any situation.</p>
					</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},

	page18:function(){
	let content = <div>
					<center><img src="img/Picture4.jpg" ></img></center>
						<center><h1>Cancer</h1></center>
						<center><h1>(Alias: The Crab)</h1></center>
						<center><h1>June 21 - July 22</h1></center>

						<p> You may have kept your distance from emotional situations because you just didn't want to deal with any sticky situations. Perhaps you closed yourself off from some of your usual social activity because you were feeling more introspective. Gradually, however, you began to come alive again, though slowly at first.</p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page19:function(){
	let content = <div>

					<center><img src="img/Picture10.jpg" ></img></center>
					<center><h1>Leo</h1></center>
					<center><h1>(Alias: The Leo)</h1></center>
					<center><h1>July 23 - August 22</h1></center>

					<p>When you are at your best, Leo, you are strong, courageous, and sure of yourself. You exemplify the very best qualities of the majestic Lion - the symbol of your sign. You have been through a challenging few years, Leo. Some significant changes happened in your life during that time, and it impacted the way you see the world around you, and the way you see yourself.</p>
									</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page20:function(){
	let content = <div>
					<center><img src="img/Picture2.jpg" ></img></center>
					<center><h1>Virgo</h1></center>
					<center><h1>(Alias: The Virgin)</h1></center>
					<center><h1>August 23 - September 22</h1></center>

					<p>You began coming into your own last year. You learned a lot about yourself, and you tested the edges of new boundaries. But in typical Virgo style, you are moving slowly through your evolution. That certainly isn't a bad thing because it gives you the chance to absorb what you see and experience and to live with it for a while before you move on to the next step.</p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page21:function(){
	let content = <div>

					<center><img src="img/Picture3.jpg" ></img></center>
					<center><h1>Libra</h1></center>
					<center><h1>(Alias: The Scales)</h1></center>
					<center><h1>September 23 - October 22</h1></center>

					<p> Libra, you may have to recognize that you have always given too much of yourself over to others, and you know this is something that has to change. You will have chances to put this new philosophy into practice, and you will be rewarded with more time to pour into your most important goals. Stand strong on your new way of dealing with this issue in the year ahead, and you'll become more of an advocate for yourself in time.</p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page22:function(){
	let content = <div>
					<center><img src="img/Picture5.jpg" ></img></center>
					<center><h1>Scorpio</h1></center>
					<center><h1>(Alias: The Scorpion)</h1></center>
					<center><h1>October 23 - November 21</h1></center>

					<p>You have been a little less secretive and private over the last year, Scorpio, and tried to be more open to those who hoped to know you better. In return, you got to know certain people in your life on a deeper level too. You may have found that experience to be surprisingly rewarding, and it had also probably changed you in some ways.</p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page23:function(){
	let content = <div>
					<center><img src="img/Picture6.jpg" ></img></center>
					<center><h1>Sagittarius</h1></center>
					<center><h1>(Alias: The Archer)</h1></center>
					<center><h1>November 22 - December 21</h1></center>

					<p> You are a new person - you are your very best self. That doesn't necessarily mean that there aren't still lessons to learn and dues to pay; because learning is a lifelong experience. But you are in the perfect place right now to make major strides toward the things you want most out of life. And luckily this year, you will have the right opportunities to put your dreams into action.</p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	page24:function(){
	let content = <div>
					<center><img src="img/Picture9.jpg" ></img></center>
					<center><h1>Capricorn</h1></center>
					<center><h1>(Alias: The Seagoat)</h1></center>
					<center><h1>December 22 - January 19</h1></center>

					<p>In most aspects of our life, Capricorn, you are an inventor and an entrepreneur. You see everything you do - not just exciting opportunities, but even the most mundane of daily tasks - as a chance to refine and perfect. </p>
				</div>;
							ReactDOM.render(content,document.getElementById('r'));
	},
	loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1);








			var _root = document.getElementById('r');
			var dom =
					<div className="view view-main">
							<div className="pages">
								<div className="page-content">
									<div className="content-block">
										<div className="content-block-inner">

						<a><center><h1>History of the Months</h1></center><a href=""></a>
				<p>The original Roman year had 10 named months:</p> 
				<p>Martius "March"</p>
				<p> Aprilis "April",</p>
				<p> Maius "May",</p>
				<p> Junius "June",</p>
				<p> Quintilis "July",</p> 
				<p>Sextilis "August",</p>  
				<p>September "September",</p>
				<p>October "October",</p>
				<p>November"November",</p>
				<p>December "December", and probably two unnamed 
				months in the dead of winter when not much happened in agriculture.</p>

					</a></div>
				</div>
			</div>	
			</div>
			</div>

		

ReactDOM.render(dom,_root);




       
