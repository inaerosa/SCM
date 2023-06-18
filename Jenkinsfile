pipeline {
	agent any

	stages {
		stage ('Build image') {
			steps {
				script {
					dockerapp = docker.build('inaerosa/SCM', '-f ./Dockerfile ./')

				}
			}
		}
	}
}