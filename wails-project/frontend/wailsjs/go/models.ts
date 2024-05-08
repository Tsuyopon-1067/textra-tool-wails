export namespace textraapi {
	
	export class ApiKey {
	    clientKey: string;
	    clientSecret: string;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new ApiKey(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.clientKey = source["clientKey"];
	        this.clientSecret = source["clientSecret"];
	        this.name = source["name"];
	    }
	}

}

