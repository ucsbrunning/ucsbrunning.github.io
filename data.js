var data = {
    "officers":[
        {
            "name":"Austin Mac",
            "title":"President",
            "profile-pic-src":"assets/profiles/profile-pics/austin-mac.jpg",
            "bio":"Hi all! I’m Austin, and I’m a 4th year studying computer science. I’ve been running for about 10 years now and I really enjoy the social and competitive aspects of running. When I’m not running, I enjoy running, listening to podcasts (Freakonomics and Radiolab), and playing with my rabbit, PuppyCat."
        },

        {
            "name":"Jacob Gardner",
            "title":"Vice President",
            "profile-pic-src":"assets/profiles/profile-pics/jacob-gardner.jpg",
            "bio":"Hey Everyone! My name is Jacob and I'm a 3rd year Mechanical Engineering major. I've been running for 7 years and enjoy it so much because I get to spend time with friends while staying fit and meeting new people. I also love sports, going to the beach, and hiking. I hope to meet you at run club!"
        },

        {
            "name":"Henry Lei",
            "title":"Vice President",
            "profile-pic-src":"assets/profiles/profile-pics/henry-lei.png",
            "bio":"My name is Henry and I'm currently a 3rd year political science major from San Francisco, attending the University of California, Santa Barbara.\n I love to run, and talk about running! In my free time you will often see me running on the trails of Elwood, the bike paths down Henley Gate, or on the roads leading up to Glen Annie Ranch! I am also a fanatic when it comes to running and feel free to talk to me about running shoes as well as professional track and field races! A fun fact about me is that I collect sports cards and have a pretty nice collection. I can be reached by email at henrylei@ucsb.edu, or through text at (415)866-5638."
        },

        {
            "name":"Madi Lam",
            "title":"Officer",
            "profile-pic-src":"assets/profiles/profile-pics/madi-lam.jpg",
            "bio":"Hi everyone! My name is Madi and I am a second year pre-bio major. I joined running club as a way to meet new friends and find people to run with. It has been one of my favorite experiences in college so far. My favorite part about running club is when we run on the beach and watch the sunset or when we stretch and talk together at the end. Some of my other hobbies besides running include baking, cooking, hiking, walking, and origami. I can’t wait to meet everyone next year! "
        },

        {
            "name":"Reed Ochalek",
            "title":"Officer",
            "profile-pic-src":"assets/profiles/profile-pics/reed-ochalek.jpg",
            "bio":"Hello, I have been running for a few years now; I love trail running the most–not a fan of pavement. When I am not at practice, I rock climb, backpack, and occasionally summit a mountain. I work at the climbing center and Adventure Programs Outdoor Staff. I have been an officer since 2022, and am excited to build the club over the coming years. I am in the class of 2025 as an Economics and Environmental Studies major."
        },

        {
            "name":"Alicia Aaholm",
            "title":"Officer",
            "profile-pic-src":"assets/profiles/profile-pics/alicia-aaholm.jpg",
            "bio":"Hi! My name is Alicia and I’m currently a second year who’s undeclared for my major. I’ve been running for about three years and joined running club at the beginning of my second year. I love running because it’s a great stress reliever for me and joined running club as it was a great way for me to meet people starting my second year of college as my first year was completely online due to the COVID-19 pandemic. Outside of running, I like playing other sports such as soccer and basketball. I can’t wait to meet you all and go for a run!"
        },

       
    ]
}

function fillOfficerGrid(officerData){
    for (let officerIndex = 0; officerIndex < officerData.length; officerIndex++){
        let grid_container = document.getElementById('officer-grid');
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.classList.add("background"+(officerIndex%4+1));
        grid_container.appendChild(newItem);
        let newTwoCol = document.createElement("div");
        newTwoCol.classList.add("twocolumn");
        newItem.appendChild(newTwoCol);
        let newLeftCol = document.createElement("div");
        newLeftCol.classList.add("left");
        newTwoCol.appendChild(newLeftCol);
        let officerImg = document.createElement("img");
        officerImg.classList.add("picture");
        officerImg.src = officerData[officerIndex]["profile-pic-src"];
        newLeftCol.appendChild(officerImg);
        let officerInfo = document.createElement("div");
        officerInfo.classList.add("right")
        newTwoCol.appendChild(officerInfo);
        let officerName = document.createElement("p");
        officerName.classList.add("name")
        officerName.innerHTML = "<b>" + officerData[officerIndex]["name"]+"<br>";
        officerInfo.appendChild(officerName);
        let officerTitle = document.createElement("span");
        officerTitle.classList.add("title");
        officerTitle.innerHTML = "<i>"+officerData[officerIndex]["title"]+"<br></i>";
        officerName.appendChild(officerTitle);
        let officerBio = document.createElement("span")
        officerBio.classList.add("bio")
        officerBio.innerHTML = "</b>"+officerData[officerIndex]["bio"];
        officerName.appendChild(officerBio);
    }
    
}

fillOfficerGrid(data["officers"])
