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
                withDockerRegistry(credentialsId: 'dockerhub-creds', url: '') {
                    sh "docker push $IMAGE_NAME:${BUILD_NUMBER}"
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
