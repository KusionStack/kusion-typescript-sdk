// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { ListBackendData, ListBackendError, ListBackendResponse, CreateBackendData, CreateBackendError, CreateBackendResponse, DeleteBackendData, DeleteBackendError, DeleteBackendResponse, GetBackendData, GetBackendError, GetBackendResponse, UpdateBackendData, UpdateBackendError, UpdateBackendResponse, GetEndpointsError, GetEndpointsResponse, ListModuleData, ListModuleError, ListModuleResponse, CreateModuleData, CreateModuleError, CreateModuleResponse, DeleteModuleData, DeleteModuleError, DeleteModuleResponse, GetModuleData, GetModuleError, GetModuleResponse, UpdateModuleData, UpdateModuleError, UpdateModuleResponse, ListOrganizationData, ListOrganizationError, ListOrganizationResponse, CreateOrganizationData, CreateOrganizationError, CreateOrganizationResponse, DeleteOrganizationData, DeleteOrganizationError, DeleteOrganizationResponse, GetOrganizationData, GetOrganizationError, GetOrganizationResponse, UpdateOrganizationData, UpdateOrganizationError, UpdateOrganizationResponse, ListProjectData, ListProjectError, ListProjectResponse, CreateProjectData, CreateProjectError, CreateProjectResponse, DeleteProjectData, DeleteProjectError, DeleteProjectResponse, GetProjectData, GetProjectError, GetProjectResponse, UpdateProjectData, UpdateProjectError, UpdateProjectResponse, ListResourceData, ListResourceError, ListResourceResponse, GetResourceData, GetResourceError, GetResourceResponse, GetResourceGraphData, GetResourceGraphError, GetResourceGraphResponse, GetRunData, GetRunError, GetRunResponse, GetRunResultData, GetRunResultError, GetRunResultResponse, ListSourceData, ListSourceError, ListSourceResponse, CreateSourceData, CreateSourceError, CreateSourceResponse, DeleteSourceData, DeleteSourceError, DeleteSourceResponse, GetSourceData, GetSourceError, GetSourceResponse, UpdateSourceData, UpdateSourceError, UpdateSourceResponse, ListRunData, ListRunError, ListRunResponse, ListStackData, ListStackError, ListStackResponse, CreateStackData, CreateStackError, CreateStackResponse, DeleteStackData, DeleteStackError, DeleteStackResponse, GetStackData, GetStackError, GetStackResponse, UpdateStackData, UpdateStackError, UpdateStackResponse, ApplyStackData, ApplyStackError, ApplyStackResponse, ApplyStackAsyncData, ApplyStackAsyncError, ApplyStackAsyncResponse, DestroyStackData, DestroyStackError, DestroyStackResponse, DestroyStackAsyncData, DestroyStackAsyncError, DestroyStackAsyncResponse, GenerateStackData, GenerateStackError, GenerateStackResponse, GenerateStackAsyncData, GenerateStackAsyncError, GenerateStackAsyncResponse, PreviewStackAsyncData, PreviewStackAsyncError, PreviewStackAsyncResponse, ListWorkspaceData, ListWorkspaceError, ListWorkspaceResponse, CreateWorkspaceData, CreateWorkspaceError, CreateWorkspaceResponse, DeleteWorkspaceData, DeleteWorkspaceError, DeleteWorkspaceResponse, GetWorkspaceData, GetWorkspaceError, GetWorkspaceResponse, UpdateWorkspaceData, UpdateWorkspaceError, UpdateWorkspaceResponse, GetWorkspaceConfigsData, GetWorkspaceConfigsError, GetWorkspaceConfigsResponse, UpdateWorkspaceConfigsData, UpdateWorkspaceConfigsError, UpdateWorkspaceConfigsResponse, CreateWorkspaceModDepsData, CreateWorkspaceModDepsError, CreateWorkspaceModDepsResponse, ValidateWorkspaceConfigsData, ValidateWorkspaceConfigsError, ValidateWorkspaceConfigsResponse } from './types.gen';

export const client = createClient(createConfig());

export class BackendService {
    /**
     * List backends
     * List all backends
     */
    public static listBackend<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListBackendData, ThrowOnError>) {
        return (options?.client ?? client).get<ListBackendResponse, ListBackendError, ThrowOnError>({
            ...options,
            url: '/api/v1/backends'
        });
    }
    
    /**
     * Create backend
     * Create a new backend
     */
    public static createBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateBackendData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateBackendResponse, CreateBackendError, ThrowOnError>({
            ...options,
            url: '/api/v1/backends'
        });
    }
    
    /**
     * Delete backend
     * Delete specified backend by ID
     */
    public static deleteBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteBackendData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteBackendResponse, DeleteBackendError, ThrowOnError>({
            ...options,
            url: '/api/v1/backends/{id}'
        });
    }
    
    /**
     * Get backend
     * Get backend information by backend ID
     */
    public static getBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetBackendData, ThrowOnError>) {
        return (options?.client ?? client).get<GetBackendResponse, GetBackendError, ThrowOnError>({
            ...options,
            url: '/api/v1/backends/{id}'
        });
    }
    
    /**
     * Update backend
     * Update the specified backend
     */
    public static updateBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateBackendData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateBackendResponse, UpdateBackendError, ThrowOnError>({
            ...options,
            url: '/api/v1/backends/{id}'
        });
    }
    
}

export class DebugService {
    /**
     * List all available endpoints
     * List all registered endpoints in the router
     */
    public static getEndpoints<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetEndpointsResponse, GetEndpointsError, ThrowOnError>({
            ...options,
            url: '/endpoints'
        });
    }
    
}

export class ModuleService {
    /**
     * List module
     * List module information
     */
    public static listModule<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListModuleData, ThrowOnError>) {
        return (options?.client ?? client).get<ListModuleResponse, ListModuleError, ThrowOnError>({
            ...options,
            url: '/api/v1/modules'
        });
    }
    
    /**
     * Create module
     * Create a new Kusion module
     */
    public static createModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateModuleData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateModuleResponse, CreateModuleError, ThrowOnError>({
            ...options,
            url: '/api/v1/modules'
        });
    }
    
    /**
     * Delete module
     * Delete the specified module by name
     */
    public static deleteModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteModuleData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteModuleResponse, DeleteModuleError, ThrowOnError>({
            ...options,
            url: '/api/v1/modules/{name}'
        });
    }
    
    /**
     * Get module
     * Get module information by module name
     */
    public static getModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetModuleData, ThrowOnError>) {
        return (options?.client ?? client).get<GetModuleResponse, GetModuleError, ThrowOnError>({
            ...options,
            url: '/api/v1/modules/{name}'
        });
    }
    
    /**
     * Update module
     * Update the specified module
     */
    public static updateModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateModuleData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateModuleResponse, UpdateModuleError, ThrowOnError>({
            ...options,
            url: '/api/v1/modules/{name}'
        });
    }
    
}

export class OrganizationService {
    /**
     * List organizations
     * List all organizations
     */
    public static listOrganization<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListOrganizationData, ThrowOnError>) {
        return (options?.client ?? client).get<ListOrganizationResponse, ListOrganizationError, ThrowOnError>({
            ...options,
            url: '/api/v1/orgs'
        });
    }
    
    /**
     * Create organization
     * Create a new organization
     */
    public static createOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateOrganizationData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateOrganizationResponse, CreateOrganizationError, ThrowOnError>({
            ...options,
            url: '/api/v1/orgs'
        });
    }
    
    /**
     * Delete organization
     * Delete specified organization by ID
     */
    public static deleteOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteOrganizationData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteOrganizationResponse, DeleteOrganizationError, ThrowOnError>({
            ...options,
            url: '/api/v1/orgs/{id}'
        });
    }
    
    /**
     * Get organization
     * Get organization information by organization ID
     */
    public static getOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetOrganizationData, ThrowOnError>) {
        return (options?.client ?? client).get<GetOrganizationResponse, GetOrganizationError, ThrowOnError>({
            ...options,
            url: '/api/v1/orgs/{id}'
        });
    }
    
    /**
     * Update organization
     * Update the specified organization
     */
    public static updateOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateOrganizationData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateOrganizationResponse, UpdateOrganizationError, ThrowOnError>({
            ...options,
            url: '/api/v1/orgs/{id}'
        });
    }
    
}

export class ProjectService {
    /**
     * List projects
     * List all or a subset of the projects
     */
    public static listProject<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListProjectData, ThrowOnError>) {
        return (options?.client ?? client).get<ListProjectResponse, ListProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/projects'
        });
    }
    
    /**
     * Create project
     * Create a new project
     */
    public static createProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateProjectData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateProjectResponse, CreateProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/projects'
        });
    }
    
    /**
     * Delete project
     * Delete specified project by ID
     */
    public static deleteProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteProjectData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteProjectResponse, DeleteProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/projects/{project_id}'
        });
    }
    
    /**
     * Get project
     * Get project information by project ID
     */
    public static getProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProjectData, ThrowOnError>) {
        return (options?.client ?? client).get<GetProjectResponse, GetProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/projects/{project_id}'
        });
    }
    
    /**
     * Update project
     * Update the specified project
     */
    public static updateProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateProjectData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateProjectResponse, UpdateProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/projects/{project_id}'
        });
    }
    
}

export class ResourceService {
    /**
     * List resource
     * List resource information
     */
    public static listResource<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListResourceData, ThrowOnError>) {
        return (options?.client ?? client).get<ListResourceResponse, ListResourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/resources'
        });
    }
    
    /**
     * Get resource
     * Get resource information by resource ID
     */
    public static getResource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetResourceData, ThrowOnError>) {
        return (options?.client ?? client).get<GetResourceResponse, GetResourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/resources/{id}'
        });
    }
    
    /**
     * Get resource graph
     * Get resource graph by stack ID
     */
    public static getResourceGraph<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetResourceGraphData, ThrowOnError>) {
        return (options?.client ?? client).get<GetResourceGraphResponse, GetResourceGraphError, ThrowOnError>({
            ...options,
            url: '/api/v1/resources/graph'
        });
    }
    
}

export class RunService {
    /**
     * Get run
     * Get run information by run ID
     */
    public static getRun<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetRunData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRunResponse, GetRunError, ThrowOnError>({
            ...options,
            url: '/api/v1/runs/{run_id}'
        });
    }
    
    /**
     * Get run result
     * Get run result by run ID
     */
    public static getRunResult<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetRunResultData, ThrowOnError>) {
        return (options?.client ?? client).get<GetRunResultResponse, GetRunResultError, ThrowOnError>({
            ...options,
            url: '/api/v1/runs/{run_id}/result'
        });
    }
    
}

export class SourceService {
    /**
     * List source
     * List source information by source ID
     */
    public static listSource<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListSourceData, ThrowOnError>) {
        return (options?.client ?? client).get<ListSourceResponse, ListSourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/sources'
        });
    }
    
    /**
     * Create source
     * Create a new source
     */
    public static createSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateSourceData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateSourceResponse, CreateSourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/sources'
        });
    }
    
    /**
     * Delete source
     * Delete specified source by ID
     */
    public static deleteSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteSourceData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteSourceResponse, DeleteSourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/sources/{id}'
        });
    }
    
    /**
     * Get source
     * Get source information by source ID
     */
    public static getSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetSourceData, ThrowOnError>) {
        return (options?.client ?? client).get<GetSourceResponse, GetSourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/sources/{id}'
        });
    }
    
    /**
     * Update source
     * Update the specified source
     */
    public static updateSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateSourceData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateSourceResponse, UpdateSourceError, ThrowOnError>({
            ...options,
            url: '/api/v1/sources/{id}'
        });
    }
    
}

export class StackService {
    /**
     * List runs
     * List all runs
     */
    public static listRun<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListRunData, ThrowOnError>) {
        return (options?.client ?? client).get<ListRunResponse, ListRunError, ThrowOnError>({
            ...options,
            url: '/api/v1/runs'
        });
    }
    
    /**
     * List stacks
     * List all stacks
     */
    public static listStack<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListStackData, ThrowOnError>) {
        return (options?.client ?? client).get<ListStackResponse, ListStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks'
        });
    }
    
    /**
     * Create stack
     * Create a new stack
     */
    public static createStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateStackData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateStackResponse, CreateStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks'
        });
    }
    
    /**
     * Delete stack
     * Delete specified stack by ID
     */
    public static deleteStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteStackData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteStackResponse, DeleteStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}'
        });
    }
    
    /**
     * Get stack
     * Get stack information by stack ID
     */
    public static getStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetStackData, ThrowOnError>) {
        return (options?.client ?? client).get<GetStackResponse, GetStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}'
        });
    }
    
    /**
     * Update stack
     * Update the specified stack
     */
    public static updateStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateStackData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateStackResponse, UpdateStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}'
        });
    }
    
    /**
     * Apply stack
     * Apply stack information by stack ID
     */
    public static applyStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ApplyStackData, ThrowOnError>) {
        return (options?.client ?? client).post<ApplyStackResponse, ApplyStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/apply'
        });
    }
    
    /**
     * Asynchronously apply stack
     * Start a run and asynchronously apply stack changes by stack ID
     */
    public static applyStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ApplyStackAsyncData, ThrowOnError>) {
        return (options?.client ?? client).post<ApplyStackAsyncResponse, ApplyStackAsyncError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/apply/async'
        });
    }
    
    /**
     * Destroy stack
     * Destroy stack information by stack ID
     */
    public static destroyStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DestroyStackData, ThrowOnError>) {
        return (options?.client ?? client).post<DestroyStackResponse, DestroyStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/destroy'
        });
    }
    
    /**
     * Asynchronously destroy stack
     * Start a run and asynchronously destroy stack resources by stack ID
     */
    public static destroyStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DestroyStackAsyncData, ThrowOnError>) {
        return (options?.client ?? client).post<DestroyStackAsyncResponse, DestroyStackAsyncError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/destroy/async'
        });
    }
    
    /**
     * Generate stack
     * Generate stack information by stack ID
     */
    public static generateStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GenerateStackData, ThrowOnError>) {
        return (options?.client ?? client).post<GenerateStackResponse, GenerateStackError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/generate'
        });
    }
    
    /**
     * Asynchronously generate stack
     * Start a run and asynchronously generate stack spec by stack ID
     */
    public static generateStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GenerateStackAsyncData, ThrowOnError>) {
        return (options?.client ?? client).post<GenerateStackAsyncResponse, GenerateStackAsyncError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/generate/async'
        });
    }
    
    /**
     * Asynchronously preview stack
     * Start a run and asynchronously preview stack changes by stack ID
     */
    public static previewStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<PreviewStackAsyncData, ThrowOnError>) {
        return (options?.client ?? client).post<PreviewStackAsyncResponse, PreviewStackAsyncError, ThrowOnError>({
            ...options,
            url: '/api/v1/stacks/{stack_id}/preview'
        });
    }
    
}

export class WorkspaceService {
    /**
     * List workspaces
     * List all workspaces
     */
    public static listWorkspace<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListWorkspaceData, ThrowOnError>) {
        return (options?.client ?? client).get<ListWorkspaceResponse, ListWorkspaceError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces'
        });
    }
    
    /**
     * Create workspace
     * Create a new workspace
     */
    public static createWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateWorkspaceData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateWorkspaceResponse, CreateWorkspaceError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces'
        });
    }
    
    /**
     * Delete workspace
     * Delete specified workspace by ID
     */
    public static deleteWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteWorkspaceData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteWorkspaceResponse, DeleteWorkspaceError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/{id}'
        });
    }
    
    /**
     * Get workspace
     * Get workspace information by workspace ID
     */
    public static getWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetWorkspaceData, ThrowOnError>) {
        return (options?.client ?? client).get<GetWorkspaceResponse, GetWorkspaceError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/{id}'
        });
    }
    
    /**
     * Update workspace
     * Update the specified workspace
     */
    public static updateWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateWorkspaceData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateWorkspaceResponse, UpdateWorkspaceError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/{id}'
        });
    }
    
    /**
     * get workspace configurations
     * Get configurations in the specified workspace
     */
    public static getWorkspaceConfigs<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetWorkspaceConfigsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetWorkspaceConfigsResponse, GetWorkspaceConfigsError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/{id}/configs'
        });
    }
    
    /**
     * Update workspace configurations
     * Update the configurations in the specified workspace
     */
    public static updateWorkspaceConfigs<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateWorkspaceConfigsData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateWorkspaceConfigsResponse, UpdateWorkspaceConfigsError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/{id}/configs'
        });
    }
    
    /**
     * Create the module dependencies of the workspace
     * Create the module dependencies in kcl.mod of the specified workspace
     */
    public static createWorkspaceModDeps<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateWorkspaceModDepsData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateWorkspaceModDepsResponse, CreateWorkspaceModDepsError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/{id}/configs/mod-deps'
        });
    }
    
    /**
     * Validate workspace configurations
     * Validate the configurations in the specified workspace
     */
    public static validateWorkspaceConfigs<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ValidateWorkspaceConfigsData, ThrowOnError>) {
        return (options?.client ?? client).post<ValidateWorkspaceConfigsResponse, ValidateWorkspaceConfigsError, ThrowOnError>({
            ...options,
            url: '/api/v1/workspaces/configs/validate'
        });
    }
    
}