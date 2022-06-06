// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber)
{   let hq=42
    return Math.abs(hq - blockNumber)
}

function distanceFromHqInFeet(blockNumber)
{ return distanceFromHqInBlocks(blockNumber)*264
}

function distanceTravelledInFeet(start, destination)
{return Math.abs(start-destination)*264
}

function  calculatesFarePrice(start, destination)
{
if (distanceTravelledInFeet(start,destination)>=2500) {
    return "cannot travel that far" ;
} else if (distanceTravelledInFeet(start,destination)>=2000)
{    return 25;
}
else if (distanceTravelledInFeet(start,destination)>=400)
{    return 0.02*(distanceTravelledInFeet(start,destination)-400);
}else if (distanceTravelledInFeet(start,destination)>=0)
{    return 0;
}
}