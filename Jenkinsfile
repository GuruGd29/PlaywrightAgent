pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                export PATH="/opt/homebrew/bin:$PATH"
                npm ci
                npx playwright install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                export PATH="/opt/homebrew/bin:$PATH"
                npx playwright test --reporter=html --workers=3
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}