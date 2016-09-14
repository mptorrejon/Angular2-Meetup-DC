module.exports = function(){
	var config = {
		//ts files we are gonna use, TS only?
		allTs: './src/**/*.ts',

		allStyles: './assets/styles/sass/**/*.scss',

		allTemplates: './assets/templates/**/*.html',

		unitTests: './test/unit-tests/*.js',
		//output path to where all compile ts files will be transpiled
		tsOutputPath: './dist/',

		testOutput: './tests/unit-tests/',

		typings: './typings/**/*.ts'
	}
	return config;
}