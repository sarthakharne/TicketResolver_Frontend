pipeline {
     environment{
        dockerimage=""
    }
    agent any
    stages {
        stage('Git clone') {
            steps {
            git branch: 'main',url: 'https://github.com/sarthakharne/ticketresolver_frontend.git'
            }
        }
        stage('Docker Build Image') {
            steps {
                script{
                    dockerimage=docker.build "sarthakharne2262/ticketresolver_frontend"   
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script{
                    docker.withRegistry('','DockerHubCred'){
                    dockerimage.push()
                    }
                }
            }
        }
          stage("Removing Image from local"){
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        
        stage('Ansible pull docker image') {
            steps {
                ansiblePlaybook colorized: true,
                credentialsId: 'localhost',
                disableHostKeyChecking: true,
                inventory: 'inventory',
                playbook: 'ansible-playbook.yml'
                // vaultCredentialsId: 'vault-pass'
            }
        }
      
    }
}
