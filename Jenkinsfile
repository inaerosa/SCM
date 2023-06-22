pipeline {
	agent any

	stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("inaerosa/scm:${env.BUILD_ID}", '-f ./Dockerfile ./') 
                }                
            }
	    }
    }
}