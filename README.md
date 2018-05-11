**Electric_car**
    
NOTE: Summary of links also in excel file attached
![Links](Links.xlsx)

    1) Title: "What are the electric vehicles (EV) available in the US?"
			§ To do: Scrape whole table and store in DB
				https://pluginamerica.org/vehicles/?fwp_type=ev
				Tag: <table id="cars_table"…
			§ Idea: When hovering over the images, "price", "electric range"  and "rating" pop up. Price and electrics range are stored in this table we just scraped :)
			§ Exclude motorcycles and the Mercedes model from final product
		
	2) Image scraping: scrape image of vehicle with neutral background so we have a homogenous look for the hero images that will be plotted on the x/y axis
	
		Links for images:
		BMW i3
		http://st.motortrend.ca/uploads/sites/10/2016/05/2016-bmw-i3-mega-hatchback-angular-front.png
		
		Chevy
		https://images.hgmsites.net/lrg/2017-chevrolet-bolt-ev-5dr-hb-lt-angular-front-exterior-view_100603023_l.jpg
		
		Fiat 500e
		https://images.dealer.com/ddc/vehicles/2017/FIAT/500e/Hatchback/color/Bianco%20Perla-PWH-241,237,227-640-en_US.jpg
		
		Ford focus
		https://images.hgmsites.net/lrg/2018-ford-focus-electric_100604706_l.jpg
		
		Hyundai
		https://www.cstatic-images.com/car-pictures/xl/usc70hyc331c021001.png
		
		Kia
		https://images.hgmsites.net/lrg/2018-kia-soul-auto-angular-front-exterior-view_100631301_l.jpg
		
		Nissan
		https://images.hgmsites.net/lrg/2017-nissan-leaf-sl-hatchback-angular-front-exterior-view_100610032_l.jpg
		
		Smart ED
		https://images.hgmsites.net/lrg/2016-smart-fortwo-electric-drive-2-door-coupe-passion-angular-front-exterior-view_100573718_l.jpg
		
		Tesla model 3
		https://pluginamerica.org/wp-content/uploads/2017/08/Screen-Shot-2017-08-15-at-4.31.42-PM-300x116.png
		
		Tesla S
		https://images.hgmsites.net/lrg/2015-tesla-model-s-4-door-sedan-awd-85d-angular-front-exterior-view_100504725_l.jpg
		
		Tesla X
		https://images.hgmsites.net/lrg/2017-tesla-model-x-75d-awd-angular-front-exterior-view_100601789_l.jpg
		
		
		VW e-Golf
		https://images.hgmsites.net/lrg/2017-volkswagen-e-golf-4-door-se-angular-front-exterior-view_100635387_l.jpg
	
	
	3) Create an x and y axis on which to display the image of each vehicle, X showing mile range and Y showing price range
	4) Each image of the vehicle clicks through  => user is taken to official site external links to learn full details/where to buy/etc.
		Note: we can also scrape interactive assets from here if we have time:

		BWW i3
		https://www.bmwusa.com/vehicles/bmwi/bmw-i3.html?from=/standard/content/vehicles/2014/bmwi/bmwi3rd.aspx&return=/standard/content/vehicles/2014/bmwi/bmwi3rd.aspx
		
		Chevy:
		http://www.chevrolet.com/electric/bolt-ev-electric-car
		
		Fiat 500
		https://www.fiatusa.com/500e.html
		
		Ford Focus electric
		https://www.ford.com/cars/focus/trim/electric/
		
		Honda
		https://automobiles.honda.com/clarity-electric
		
		Hyundai
		https://m.hyundaiusa.com/ioniq-electric/limited/specifications.html
		
		Kia
		https://www.kia.com/us/en/vehicle/soul-ev/2018
		
		Mercedes - exclude
		
		Nissan
		https://www.nissanusa.com/vehicles/electric-cars/leaf.html
		
		Smart
		https://www.smartusa.com/models/electric-pure-coupe
		
		Tesla model3 (reserve yours)
		https://www.tesla.com/model3
		
		Tesla model S
		https://www.tesla.com/models
		
		Tesla model X
		https://www.tesla.com/modelx
		
		(motorcycles - exclude)
		
		E-Golf:
		http://www.vw.com/models/e-golf/?&cid=ssem_y56fGy49_95913095106_c


	5) Consolidate reviews from car connection or motor trends
		Tag: <span class="ratingNumber">7.2</span>
		https://www.thecarconnection.com/cars/bmw_i3#image=100619277
		https://www.thecarconnection.com/cars/chevrolet_bolt#image=100633723
		https://www.thecarconnection.com/cars/fiat_500e
		https://www.thecarconnection.com/overview/ford_focus-electric_2018
		https://www.thecarconnection.com/cars/honda_fcx-clarity
		https://www.thecarconnection.com/cars/hyundai_ioniq
		https://www.thecarconnection.com/cars/kia_soul
		https://www.thecarconnection.com/cars/nissan_leaf
		https://www.thecarconnection.com/cars/tesla_model-s
		https://www.thecarconnection.com/cars/tesla_model-x
		https://www.thecarconnection.com/cars/volkswagen_e-golf
		
		
	6) Add a section of "did you know about tax credits?"
	Select "ALL" states and scrape full table:
	https://www.energy.gov/eere/electricvehicles/electric-vehicles-tax-credits-and-other-incentives
	
	Tag: <table id="results" class="display dataTable no-footer" We can create an interactive drop down for tax credits: Do the drop down to select state to show applicable tax credits for user

Footnote:
What is an electric vehicle (EV)?  A battery electric car is a plug-in electric automobile that is propelled by one or more electric motors, using energy typically stored in rechargeable batteries. Source: 
https://en.wikipedia.org/wiki/Electric_car

