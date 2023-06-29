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
		stage ('Run Image') {
			steps {
				script {
					sh 'docker run -d -p 3000:3000 inaerosaa/scm'
					echo 'Access: http://172.0.0.1:3000'
				}
			}
		}
    	}
}
