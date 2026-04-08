import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '79ed2dc747000b105550bb30116d43ba': {
                        table: 'sys_scope_privilege'
                        id: '79ed2dc747000b105550bb30116d43ba'
                    }
                    auto_populate_fields_rule: {
                        table: 'sys_script'
                        id: '83630459ff4d4dcb86a8bc29e3912c0d'
                    }
                    b1ff65cb47000b105550bb30116d43a6: {
                        table: 'sys_scope_privilege'
                        id: 'b1ff65cb47000b105550bb30116d43a6'
                    }
                    beffadcb47000b105550bb30116d43bc: {
                        table: 'sys_scope_privilege'
                        id: 'beffadcb47000b105550bb30116d43bc'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7b71a890a08a442daba757a9771cb54a'
                    }
                    create_onboarding_requests: {
                        table: 'sys_security_acl'
                        id: '50a87abdfbad411cb9474e2f3ec0fedd'
                    }
                    hr_approval_access: {
                        table: 'sys_security_acl'
                        id: '488e9e48cb024317ac1db07da51585f6'
                    }
                    hr_approval_workflow: {
                        table: 'sys_script'
                        id: 'bef7afc5aa304af4afc1e84fb856b92d'
                    }
                    it_completion_workflow: {
                        table: 'sys_script'
                        id: 'e36439f57f6a4e879b5e6552e2114557'
                    }
                    it_setup_access: {
                        table: 'sys_security_acl'
                        id: 'd4a84edc6bc54b49a5359df72fc86bcc'
                    }
                    manager_approval_access: {
                        table: 'sys_security_acl'
                        id: '6f2cc539c16e4eb5885a8c536cdc28a7'
                    }
                    manager_approval_workflow: {
                        table: 'sys_script'
                        id: 'fe20a6be9ad2454ea20e5dc0a79ecc2d'
                    }
                    onboarding_notification_rule: {
                        table: 'sys_script'
                        id: 'e528e0076f7448b8ab61ec4419e99e47'
                    }
                    onboarding_workflow_rule: {
                        table: 'sys_script'
                        id: 'bc22dc85045a47ef992a9b5fdf65d157'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '2d61a06b7dcc4ce9931299e2a49ee22e'
                    }
                    read_onboarding_requests: {
                        table: 'sys_security_acl'
                        id: 'b40dca14d0fe442f96b878a904f94b36'
                    }
                    salary_field_access: {
                        table: 'sys_security_acl'
                        id: 'e214cc7aea364e69a0051972a813a581'
                        deleted: true
                    }
                    sample_onboarding_1: {
                        table: 'x_1902321_employee_onboarding_request'
                        id: '672165755bc140c486dd3566915e7194'
                    }
                    sample_onboarding_2: {
                        table: 'x_1902321_employee_onboarding_request'
                        id: '753d9893b7f8406a98b41cea251ba9e2'
                    }
                    sample_onboarding_3: {
                        table: 'x_1902321_employee_onboarding_request'
                        id: '1c66cce1e7544d4aa1198e33b7653353'
                    }
                    sample_onboarding_4: {
                        table: 'x_1902321_employee_onboarding_request'
                        id: 'fa7bc486e7ae4d468181058704d3b243'
                    }
                    'src_server_onboarding-automation_js': {
                        table: 'sys_module'
                        id: 'e8d39e5a2f3643999999becea9e47ac9'
                    }
                    training_completion_access: {
                        table: 'sys_security_acl'
                        id: 'ee422f8e81df4a7e9d5ad0e65e2de77c'
                    }
                    training_completion_workflow: {
                        table: 'sys_script'
                        id: 'b683ba9634ff476b8a0e7713e7732e59'
                    }
                    update_onboarding_requests: {
                        table: 'sys_security_acl'
                        id: '89a36e856fe44e01aa2964b8c0bb6f2a'
                    }
                    validate_employee_data_rule: {
                        table: 'sys_script'
                        id: 'f19ecbd2e5794734a441bd118df0312b'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role_contains'
                        id: '047d8bdd259a40bd9945c5927f23a6b7'
                        key: {
                            role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                            contains: {
                                id: '8c61113cadbd448fb990b4dd995cfd35'
                                key: {
                                    name: 'x_1902321_employee.it_provisioning'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04a7f38ea0c642feaa828699705550e7'
                        key: {
                            sys_security_acl: '89a36e856fe44e01aa2964b8c0bb6f2a'
                            sys_user_role: {
                                id: 'c216bd3633b1482e949148947caede53'
                                key: {
                                    name: 'x_1902321_employee.hiring_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '04faae420dd14ec3989ca90870bccea5'
                        key: {
                            application_file: 'dde71c0aa61545d2a2f109a08ff5b0a2'
                            source_artifact: '8b68d692232749f3acc210b3b5a07728'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '086bd4c8f23242b88563830181ead3c3'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0bc6feed0e4949268987463da9489d61'
                        key: {
                            sys_security_acl: 'b40dca14d0fe442f96b878a904f94b36'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c7d860a417d46f28ad1e919c1d92789'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'hr_approved'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1b5f29c2079a4e39b115e3fef4420488'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bf231e7d1c04e3986330193f75c3071'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'it_setup_complete'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1d07030489cd4d3e98b4da4e1eca32cb'
                        key: {
                            sys_security_acl: 'ee422f8e81df4a7e9d5ad0e65e2de77c'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1e3b88488422423eb2f54716d62b1639'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1fff68ff00834031b9dc6eb686cd034f'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2064404c20b94166af3e4707684edc40'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'special_requirements'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2242e3bf90564d35992735b4bcbc0318'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            value: 'marketing'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '22529175a523462d9a43c8fbd0213955'
                        key: {
                            sys_security_acl: '50a87abdfbad411cb9474e2f3ec0fedd'
                            sys_user_role: {
                                id: 'c216bd3633b1482e949148947caede53'
                                key: {
                                    name: 'x_1902321_employee.hiring_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '22f18617c7f54965a57ff3489bf79472'
                        key: {
                            role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                            contains: {
                                id: 'c216bd3633b1482e949148947caede53'
                                key: {
                                    name: 'x_1902321_employee.hiring_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29665b2347b5445fb5d0e374a0c3773e'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'it_setup_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b0a6dd0149e419894f1bca0fbffc007'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3024c2e60aaa4810bbee9b1cc63a375e'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                            value: 'full_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30f88c8ca5b44784a1284400e61860f4'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '328d39a6e2044862a3e9fdfdc24005b2'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            value: 'hr'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a75217cc5424bc7a73995b1faf9c8d5'
                        key: {
                            sys_security_acl: '488e9e48cb024317ac1db07da51585f6'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3ae9afa533674f59902387c13e8d14df'
                        key: {
                            sys_security_acl: 'b40dca14d0fe442f96b878a904f94b36'
                            sys_user_role: {
                                id: 'c216bd3633b1482e949148947caede53'
                                key: {
                                    name: 'x_1902321_employee.hiring_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3df71bf9fd5747c48ddf5a34840b355a'
                        deleted: true
                        key: {
                            sys_security_acl: 'e214cc7aea364e69a0051972a813a581'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44d19a5ff6794e69b845f26223d146ad'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45db59fad7954e9c97105d2862a2ed5f'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'manager_approved'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c98e15283fb4d8d9a4afb0f3ea9301f'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d5d664e812c4aac8453a113083645e3'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5365bfb58587453ba72414bd3da313f1'
                        key: {
                            sys_security_acl: '50a87abdfbad411cb9474e2f3ec0fedd'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '566113999fc04bf7b7514805111ed57a'
                        key: {
                            sys_security_acl: 'ee422f8e81df4a7e9d5ad0e65e2de77c'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5f70a65f4d7247fca44ca301e01efc4b'
                        deleted: true
                        key: {
                            sys_security_acl: 'e214cc7aea364e69a0051972a813a581'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '6478c9ca91954e4fa0effa3e4a5cf49f'
                        key: {
                            application_file: 'b7e13ab178e846c994b26ceb8ade465f'
                            source_artifact: '8b68d692232749f3acc210b3b5a07728'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6617d36dc9154003943d654428a97472'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_first_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66d8e0ffedc84bf99671ebe93b7deaa2'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'pending_hr_review'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69852e60548440ab8b4938a2f553d164'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            value: 'finance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ab000a0afe049dc9d8ebac9438d4437'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'laptop_required'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '716bcdc95e8740479b10304d9181aba4'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72b289e46d6a4e8eb36df61947bc2d03'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'pending_manager_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72b456fd998543d4ac3bfcbf71ea2a03'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'training_complete'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '76419736d1564eabaf6bd8cce63b963d'
                        key: {
                            sys_security_acl: '6f2cc539c16e4eb5885a8c536cdc28a7'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ae4e1db9ecb4f1d90780077a9c97e34'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'salary'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d86a3c313794d49be4096b227ce43c4'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e6039f10a4a4db9a1ee04843831586b'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '839252e08c96494bbc5277db287fbc30'
                        key: {
                            sys_security_acl: '89a36e856fe44e01aa2964b8c0bb6f2a'
                            sys_user_role: {
                                id: '8c61113cadbd448fb990b4dd995cfd35'
                                key: {
                                    name: 'x_1902321_employee.it_provisioning'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8640906c33a64ca78f7ce8c7d271eadd'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'laptop_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '87d047c7f2c54182b5fde64f6c0e2a9f'
                        key: {
                            application_file: '9d565085d18841879012d260a1012a47'
                            source_artifact: '8b68d692232749f3acc210b3b5a07728'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '891e7e53a8a344c48842396d0afdbe25'
                        key: {
                            role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                            contains: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a5f997acc6c49fab13a163968ebc1e9'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                            value: 'contract'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '8b68d692232749f3acc210b3b5a07728'
                        key: {
                            name: 'x_1902321_employee_onboarding_dashboard.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8c61113cadbd448fb990b4dd995cfd35'
                        key: {
                            name: 'x_1902321_employee.it_provisioning'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8daf23d28e9140e081be9f8ede237ecc'
                        key: {
                            sys_security_acl: '6f2cc539c16e4eb5885a8c536cdc28a7'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8e0cd67227de4f0d91c715dea3d4d100'
                        key: {
                            sys_security_acl: 'd4a84edc6bc54b49a5359df72fc86bcc'
                            sys_user_role: {
                                id: '8c61113cadbd448fb990b4dd995cfd35'
                                key: {
                                    name: 'x_1902321_employee.it_provisioning'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90bbbb857fb1401b87668a33e01a1b94'
                        key: {
                            sys_security_acl: '89a36e856fe44e01aa2964b8c0bb6f2a'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9177e2b4d9e14c3bbe12c1aa00402645'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'training_assigned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9357438e69f54f71ae8a2ef72ff4ecba'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'training_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93c1c97f894c4330ab72bae5b492f43a'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93d1ef64926c47ba8792b3b1c01640c5'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'job_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94b9ddaf8af74c27af3a7ea4348aef0a'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95353e326e7a4de09fd78bb6c42db648'
                        key: {
                            sys_security_acl: 'ee422f8e81df4a7e9d5ad0e65e2de77c'
                            sys_user_role: {
                                id: '8c61113cadbd448fb990b4dd995cfd35'
                                key: {
                                    name: 'x_1902321_employee.it_provisioning'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9686842beba948b3a709433decee31ee'
                        key: {
                            sys_security_acl: 'ee422f8e81df4a7e9d5ad0e65e2de77c'
                            sys_user_role: {
                                id: 'c216bd3633b1482e949148947caede53'
                                key: {
                                    name: 'x_1902321_employee.hiring_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d3f6352e2fb402e8a4a5c56afb8db6a'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '9d565085d18841879012d260a1012a47'
                        key: {
                            name: 'x_1902321_employee/main.js.map'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a7d3d2fb529b4574803f1f88704de5a2'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8c6e84b14094b9fad44fa356faa9ced'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'hr_approved'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad40e3edb9684613ac7a8b7cb5765813'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'office_access_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad9ddbe7c63d42509608c24c3e9a96d6'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae3211bfe408410a9200bb62a9059279'
                        key: {
                            sys_security_acl: '89a36e856fe44e01aa2964b8c0bb6f2a'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae784844e4304285b7e4c9698453ee48'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'af6671f4b0d5437b8e023cc796b2b0d2'
                        key: {
                            sys_security_acl: '488e9e48cb024317ac1db07da51585f6'
                            sys_user_role: {
                                id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                                key: {
                                    name: 'x_1902321_employee.hr_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1562c2f97e64f688fd6c20a5d59b04a'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_last_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4078ab94b25472e893d2e288e011fd3'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b42a28b34c05468cb68e3b6698411464'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b52d34ccb7ec4fe9b14660359e647728'
                        key: {
                            name: 'x_1902321_employee.employee_admin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b7b06387fa684914994a60fa2208077c'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'onboarding_status'
                            value: 'pending_it_provisioning'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'b7e13ab178e846c994b26ceb8ade465f'
                        key: {
                            name: 'x_1902321_employee/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfe56b2699ef40fbb5440aa63d632101'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'salary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1e4158d89ff4e1c8a9f778525f464d5'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c216bd3633b1482e949148947caede53'
                        key: {
                            name: 'x_1902321_employee.hiring_manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c25a318f8f7e4863afeabe2e1e8dea29'
                        key: {
                            sys_security_acl: '6f2cc539c16e4eb5885a8c536cdc28a7'
                            sys_user_role: {
                                id: 'c216bd3633b1482e949148947caede53'
                                key: {
                                    name: 'x_1902321_employee.hiring_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c38c3eddfffd496bb155615fd93278da'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            value: 'it'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4ac7c9a67864efb9f684c6993b20a53'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'job_title'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c7d97b43f893472e946056c472bbb2e8'
                        key: {
                            sys_security_acl: 'b40dca14d0fe442f96b878a904f94b36'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfbd535746094d7c817a3721e1aaff8b'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'manager_approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd036e5ce3ec04e3d822dbcdf3be4b48b'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            value: 'operations'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd1bac5d8f35e46b0bd2ebe95417fd6e4'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                            value: 'part_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5c313865c67461980d7807794b7a220'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'office_access_required'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd94d8deac37644518bf60dd022aa915f'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employee_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd072e6be4674407a8c61234103abcef'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd3422b47c1d48329f300014605100a7'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                            value: 'legal'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'dde71c0aa61545d2a2f109a08ff5b0a2'
                        key: {
                            endpoint: 'x_1902321_employee_onboarding_dashboard.do'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e08064db66fd40d8954ee3833e06a12d'
                        key: {
                            sys_security_acl: 'b40dca14d0fe442f96b878a904f94b36'
                            sys_user_role: {
                                id: '8c61113cadbd448fb990b4dd995cfd35'
                                key: {
                                    name: 'x_1902321_employee.it_provisioning'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e21cd8ca4b8a4471b471eebb39126cdb'
                        key: {
                            name: 'x_1902321_employee.hr_specialist'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e52ad0181c424255b5532933fc37d01b'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e779024d2fb84c5ca2eac9be3385154e'
                        key: {
                            sys_security_acl: 'd4a84edc6bc54b49a5359df72fc86bcc'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7ce5c364a2145b4925a5880fe1b7421'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f10c7f94198742cb8c913de3e4714550'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'special_requirements'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f8d2ae5f98c24b3c92de1c5d7a0a97fe'
                        key: {
                            sys_security_acl: '50a87abdfbad411cb9474e2f3ec0fedd'
                            sys_user_role: {
                                id: 'b52d34ccb7ec4fe9b14660359e647728'
                                key: {
                                    name: 'x_1902321_employee.employee_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fbc3c4dd214249489f7f69302716d034'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'employment_type'
                            value: 'intern'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fc6506668fa54e88b8855822daefeeda'
                        key: {
                            name: 'x_1902321_employee_onboarding_request'
                            element: 'department'
                        }
                    },
                ]
            }
        }
    }
}
