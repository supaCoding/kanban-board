// api/taskApi.ts or api/taskApi.function.ts

import { app } from '@azure/functions';

app.http('taskApi', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const tasks = [
            { id: 1, title: 'Build board UI', status: 'Todo' },
            { id: 2, title: 'Hook API', status: 'In Progress' }
        ];

        return {
            status: 200,
            jsonBody: tasks,
        };
    }
});
