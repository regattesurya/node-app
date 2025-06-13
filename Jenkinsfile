pipeline {
    agent any

    environment {
        IMAGE_NAME = "regattesurya/node-ci-app"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/regattesurya/node-app.git' // Your GitHub repo
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
                sh "docker build -t regattesurya/node-app:5 ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry(credentialsId: 'dockerhub-creds', url: 'https://index.docker.io/v1/') {
                    sh "docker push regattesurya/node-app:5"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

