/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

package org.dinky.job;

import org.dinky.data.job.JobStatement;
import org.dinky.data.result.SqlExplainResult;

import org.apache.flink.core.execution.JobClient;
import org.apache.flink.runtime.rest.messages.JobPlanInfo;
import org.apache.flink.streaming.api.graph.StreamGraph;

import java.util.Optional;

public interface JobRunner {

    Optional<JobClient> execute(JobStatement jobStatement) throws Exception;

    void run(JobStatement jobStatement) throws Exception;

    SqlExplainResult explain(JobStatement jobStatement);

    StreamGraph getStreamGraph(JobStatement jobStatement);

    JobPlanInfo getJobPlanInfo(JobStatement jobStatement);
}
