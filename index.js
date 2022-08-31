async function start() {


    let anokaCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227003%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json());
    
    let carverCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227019%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json());
    
    let dakotaCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227037%22+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json());
    
    let scottCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227139%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json())
    
    let ramseyCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227123%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json());
    
    let hennepinCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227053%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json());
    
    let washingtonCountyArray = fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227163%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson").then((response) => response.json());
    
    
    let response = await Promise.all([
        
        anokaCountyArray,
        carverCountyArray,
        dakotaCountyArray,
        scottCountyArray,
        ramseyCountyArray,
        hennepinCountyArray,
        washingtonCountyArray
        
        
    ].map(promise => promise.catch(error => error)));
        
	console.log(response)
	
	
    
	
    }
    
    
    start();
    
    function submit() {
		
		
        
        let userInput = document.getElementById('userInput').value;
        
        const countyAttributes = response.map(
            r => r.features.map(
            f => f.attributes
            )
        )
    
        console.log(userInput);
    
        const test = "333425210001"
    
        const findMatchingCounty = countyAttributes[0].find(county => county["COUNTY_PIN"] === userInput)
    }
    
    