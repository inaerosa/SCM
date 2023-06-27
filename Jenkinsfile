pipeline {
	agent any

	stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("inaerosaa/scm:${env.BUILD_ID}", '-f ./Dockerfile ./') 
                }                
            }
	    }
        stage ('Pull Image') {
           steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
	    }
    }
}
