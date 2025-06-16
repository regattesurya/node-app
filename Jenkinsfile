pipeline {
    agent any

    environment {
        IMAGE_NAME = 'regattesurya/node-app'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/regattesurya/node-app.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME:${BUILD_NUMBER} ."
            }
        }

        stage('Push Docker Image') {
            steps {
<<<<<<< HEAD
                withDockerRegistry(credentialsId: 'dockerhub-creds', url: 'https://index.docker.io/v1/') {
                    sh "docker push regattesurya/node-app:5"
                }
            }
        }
        stage('Deploy Container') {
            steps {
                sh "docker run -d -p 3000:3000 node-app:5"{
=======
                withDockerRegistry(credentialsId: 'dockerhub-creds', url: '') {
                    sh "docker push $IMAGE_NAME:${BUILD_NUMBER}"
>>>>>>> d92bf8601a51a6a31ef83374321d104175cc7f48
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and push successful!'
        }
        failure {
            echo '❌ Build failed. Check logs.'
        }
        always {
            cleanWs()
            }
        }
    }
}
